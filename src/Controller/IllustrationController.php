<?php

namespace App\Controller;

use App\Entity\Illustration;
use App\Form\IllustrationType;
use App\Repository\IllustrationRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Asset\Package;
use Symfony\Component\Asset\VersionStrategy\EmptyVersionStrategy;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class IllustrationController extends AbstractController
{
    /**
     * @Route("/shop", name="illustration_show")
     */
    public function index(IllustrationRepository $repo)
    {
        $illustrations = $repo->findAll();

        return $this->render('illustration/index.html.twig', [
            'illustrations' => $illustrations,
        ]);
    }

    /**
     * @Route("/admin/illustrations", name="illustration_admin_show")
     */
    public function showEdit(IllustrationRepository $repo)
    {
        $illustrations = $repo->findAll();

        return $this->render('illustration/interface.html.twig', [
            'illustrations' => $illustrations,
        ]);
    }


    /**
     * @Route("/admin/illustration/add", name="illustration_upload")
     * @Route("/admin/illustration/{slug}/update", name="illustration_update")
     */
    public function upload_form(Illustration $illustration = null, Request $request, ObjectManager $manager)
    {

        if (!$illustration) {
            $illustration = new Illustration();
        }
        $form = $this->createForm(IllustrationType::class, $illustration);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$illustration->getId()) {
                $illustration->setActive(false);
            }

            $this->addFlash('success', 'L\'illustration a bien été ajouté/mis à jour !');

            $manager->persist($illustration);
            $manager->flush();

            return $this->redirectToRoute('illustration_admin_show');
        }
        return $this->render('illustration/uploadForm.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/illustration/{slug}/delete", name="illustration_delete")
     */
    public function delete(IllustrationRepository $repo, ObjectManager $manager, $slug)
    {
        $illustration = $repo->findOneBy(['slug' => $slug]);

        $manager->remove($illustration);
        $manager->flush();

        return $this->redirectToRoute('illustration_admin_show');
    }
}
