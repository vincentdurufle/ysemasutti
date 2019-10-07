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

}
