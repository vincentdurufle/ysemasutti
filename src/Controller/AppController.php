<?php

namespace App\Controller;

use App\Repository\AlbumRepository;
use App\Repository\ArticleRepository;
use App\Repository\IllustrationRepository;
use App\Repository\InvoiceRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/", name="canvas")
     */
    public function index()
    {
        return $this->render('admin/index.html.twig', [
            'title' => 'Ysé Masutti - Illustration',
        ]);
    }

    /**
     * @Route("/home", name="home")
     */
    public function home(IllustrationRepository $illuRepo, AlbumRepository $albumRepo, ArticleRepository $articleRepo)
    {
        $illustrations = $illuRepo->findBy(['active' => false], ['id' => 'DESC'], 1);
        $albums = $albumRepo->findBy([], ['id' => 'DESC'], 1);
        $articles = $articleRepo->findBy([], ['id' => 'DESC'], 1);

        return $this->render('admin/home.html.twig', [
            'illustrations' => $illustrations,
            'albums' => $albums,
            'articles' => $articles,
            'title' => 'Ysé Masutti - Home'
        ]);
    }

    /**
     * @Route("/admin", name="admin_interface")
     */
    function interface (InvoiceRepository $repo)
    {
        $invoices = $repo->findBy(['active' => false]);

        return $this->render('admin/interface.html.twig', [
            'invoices' => $invoices,
        ]);
    }

    /**
     * @Route("/about", name="about_show")
     */
    public function about()
    {
        return $this->render('admin/about.html.twig', []);
    }


    
    /**
     * @Route("/admin/invoice/{id}/done", name="invoice_done")
     */
    public function updateInvoice(InvoiceRepository $repo, $id, ObjectManager $manager)
    {
        $invoice = $repo->findOneBy(['id' => $id]);
        $invoice->setActive(true);
        $manager->persist($invoice);
        $manager->flush();

        $this->addFlash('success', 'Votre dernière vente à bien été marqué comme traité.');

        return $this->redirectToRoute('admin_interface');
    }

}
