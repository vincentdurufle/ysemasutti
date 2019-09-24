<?php

namespace App\Controller;

use App\Entity\Invoice;
use App\Repository\IllustrationRepository;
use App\Repository\InvoiceRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StoreController extends AbstractController
{
    /**
     * @Route("/store/webhook", name="store")
     */
    public function index(Request $request, IllustrationRepository $repo, ObjectManager $manager, Invoice $invoice = null)
    {

        // Set your secret key: remember to change this to your live secret key in production
        // See your keys here: https://dashboard.stripe.com/account/apikeys
        \Stripe\Stripe::setApiKey('sk_test_B8sSiB1kCYozq7aP8DX68Xib00Gh5u9JtT');
        $endpoint_secret = 'whsec_CW9QkrZWzDCQcDuFlcA88ekgkoIFXp2R';

        $header = 'HTTP_STRIPE_SIGNATURE';
        $sig_header = $request->server->get($header);

        // You can find your endpoint's secret in your webhook settings

        $payload = @file_get_contents('php://input');

        $event = null;

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload, $sig_header, $endpoint_secret
            );
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            echo ($e);
            exit();
        } catch (\Stripe\Error\SignatureVerification $e) {
            // Invalid signature
            echo ($e);
            exit();
        }

// Handle the checkout.session.completed event
        if ($event->type == 'checkout.session.completed') {
            $session = $event->data->object;

            // Set illustration as sold
            $illustration = $repo->findOneBy(['title' => $session->display_items[0]->custom->name]);
            $illustration->setActive(true);
            //create invoice and retrieve customer informations
            $customer = \Stripe\PaymentIntent::retrieve($session->payment_intent);
            $dataCustomer = $customer->charges->data[0]->billing_details;

            $customerAddress = json_decode(json_encode($dataCustomer->address), true); //transform object into array
            $address = implode(', ', $customerAddress);

            $invoice = new Invoice();
            $invoice->setSiret('81801978800012');
            $invoice->setAddress('18 rue du pont aux choux, Paris 75003');
            $invoice->setCustomer([
                'name' => $dataCustomer->name,
                'address' => $address,
                'email' => $dataCustomer->email
                ]);
            $invoice->setDescription([
                'title' => $illustration->getTitle(),
                'price' => $illustration->getPrice()
            ]);
            $invoice->setCreatedAt(new \DateTime("now"));
            $invoice->setActive(false);
            
            $manager->persist($invoice);
            $manager->persist($illustration);
            $manager->flush();
        }

        $response = new Response();
        return $response->setStatusCode(Response::HTTP_OK);

    }

    /**
     * @Route("/shop/success", name="shop_success")
     */
    public function success()
    {
        
        \Stripe\Stripe::setApiKey('sk_test_B8sSiB1kCYozq7aP8DX68Xib00Gh5u9JtT');

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
    public function invoice(InvoiceRepository $repo, $id, \Knp\Snappy\Pdf $snappy)
    {
        $invoice = $repo->findOneBy(['id' => $id]);

        $html = $this->renderView('store/invoice.html.twig', [
            'invoice' => $invoice
        ]);

        return new PdfResponse(
            $snappy->getOutputFromHtml($html),
        "facture-$id.pdf"
        );
    }

    /**
     * @Route("/admin/facture", name="invoice_show")
     */
    public function invoiceInterface(InvoiceRepository $repo)
    {
        $invoices = $repo->findAll();

        return $this->render('store/interfaceInvoice.html.twig', [
            'invoices' => $invoices
        ]);
    }

    
    
}
