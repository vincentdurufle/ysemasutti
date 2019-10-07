<?php

namespace App\Controller;

use App\Entity\Invoice;
use App\Repository\IllustrationRepository;
use App\Repository\InvoiceRepository;
use App\Service\Store;
use Doctrine\Common\Persistence\ObjectManager;
use Dompdf\Dompdf;
use Dompdf\Options;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StoreController extends AbstractController
{
    /**
     * Collects information from stripe after a payment and
     * sends a 200 code back to stripe
     *
     * @Route("/store/webhook", name="store")
     */
    public function index(Request $request, IllustrationRepository $repo, ObjectManager $manager, Invoice $invoice = null, Store $store)
    {
        $store->stripe($request, $repo, $manager, $invoice);

        $response = new Response();
        return $response->setStatusCode(Response::HTTP_OK);
    }

    /**
     * @Route("/shop/success", name="shop_success")
     */
    public function success()
    {

        \Stripe\Stripe::setApiKey($this->getParameter('STRIPE_APIKEY_PUBLIC'));

        return $this->render('store/success.html.twig', [

        ]);
    }

    /**
     * @Route("/shop/{slug}/cancel", name="shop_cancel")
     */
    public function cancel(IllustrationRepository $repo, $slug)
    {
        $illustration = $repo->findOneBy(['slug' => $slug]);

        return $this->render('store/cancel.html.twig', [
            'illustration' => $illustration,
        ]);
    }

    /**
     * @Route("/admin/facture/{id}", name="invoice_single_show")
     */
    public function invoice(InvoiceRepository $repo, $id)
    {
        $invoice = $repo->find($id);

        $options = new Options();
        $options->set('isRemoteEnabled', true);
        $options->set('tempDir', '/public/pdf');
        $options->set('defaultFont', 'Josefin Slab');
        $html = $this->renderView('store/invoice.html.twig', [
            'invoice' => $invoice,
            ]);
        
        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'portait');
        $dompdf->render();

        $dompdf->stream("mypdf.pdf", [
            "Attachment" => false,
        ]);
    }

    /**
     * @Route("/admin/facture", name="invoice_show")
     */
    public function invoiceInterface(InvoiceRepository $repo)
    {
        $invoices = $repo->findAll();

        return $this->render('store/interfaceInvoice.html.twig', [
            'invoices' => $invoices,
        ]);
    }

    /**
     * @Route("/shop/illustration/{slug}", name="illustration_single_show")
     */
    public function illustrationPage(IllustrationRepository $repo, $slug)
    {
        $illustration = $repo->findOneBy(['slug' => $slug]);

        $package = new Package(new EmptyVersionStrategy());
        $image = $package->getUrl('uploads/illustration/' . $illustration->getImage() . '');

        // Set your secret key: remember to change this to your live secret key in production
        // See your keys here: https://dashboard.stripe.com/account/apikeys
        \Stripe\Stripe::setApiKey($this->getParameter('STRIPE_APIKEY_SECRET'));

        $session = \Stripe\Checkout\Session::create([
            'billing_address_collection' => 'required',
            'payment_method_types' => ['card'],
            'line_items' => [[
                'name' => $illustration->getTitle(),
                'description' => 'Illustration au format A4 signé par l\'auteur.',
                'images' => ["https://ysemasutti.com/$image"],
                'amount' => ($illustration->getPrice() * 100),
                'currency' => 'eur',
                'quantity' => 1,
            ], [
                'name' => 'Frais de port.',
                'description' => 'Prix total pour frais de port.',
                'amount' => 10 * 100,
                'currency' => 'eur',
                'quantity' => 1,
            ]],
            'success_url' => 'https://ysemasutti.com/shop/success?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => 'https://ysemasutti.com/shop/cancel',
        ]);

        return $this->render('illustration/single.html.twig', [
            'illustration' => $illustration,
            'stripe_session' => $session,
        ]);
    }
}
