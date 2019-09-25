<?php

namespace App\Controller;

use App\Entity\Invoice;
use App\Repository\IllustrationRepository;
use App\Repository\InvoiceRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\StoreHelpers;

class StoreController extends AbstractController
{
    /**
     * @Route("/store/webhook", name="store")
     */
    public function index(IllustrationRepository $repo, ObjectManager $manager, Invoice $invoice = null, StoreHelpers $store)
    {

    


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
