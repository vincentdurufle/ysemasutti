<?php

namespace App\Controller;

use App\Entity\Album;
use App\Form\AlbumType;
use App\Repository\AlbumRepository;
use App\Service\Slider;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AlbumController extends AbstractController
{
    /**
     * @Route("/album", name="album_show")
     */
    public function index(AlbumRepository $repo)
    {
        $albums = $repo->findAll();

        return $this->render('album/index.html.twig', [
            'albums' => $albums,
        ]);
    }

    /**
     * @Route("/admin/album", name="album_admin_show")
     */
    public function adminAlbumPage(AlbumRepository $repo)
    {
        $albums = $repo->findAll();

        return $this->render('album/interface.html.twig', [
            'albums' => $albums,
        ]);
    }

    /**
     * @Route("/album/{slug}", name="album_show_single")
     */
    public function albumPage(Album $album)
    {
        return $this->render('album/single.html.twig', [
            'album' => $album,
        ]);
    }

    /**
     * checks if there's files then checks if there's 
     * already a slider array in entity then
     * deletes necessary files from server
     * 
     * @Route("/admin/album/add", name="album_upload")
     * @Route("/admin/album/{slug}/update", name="album_update")
     */
    public function uploadForm(Album $album = null, Request $request, ObjectManager $manager, Slider $slider)
    {
        if (!$album) {
            $album = new Album();
        }
        $form = $this->createForm(AlbumType::class, $album);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $files = $form['sliderFile']->getData();
            
            if (!empty($files)) {
                if (!empty($album->getSlider())) {                    
                    $slider->delete($album->getSlider());
                }
            
                $sliderArray = $slider->upload($files);
                $album->setSlider($sliderArray);
            }
            $this->addFlash('success', 'L\'album a bien été ajouté/mis à jour !');

            $manager->persist($album);
            $manager->flush();

            return $this->redirectToRoute('album_admin_show');
        }

        return $this->render('album/uploadForm.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * deletes files from db and server
     * 
     * @Route("/admin/album/{slug}/delete", name="album_delete")
     */
    public function delete(AlbumRepository $repo, ObjectManager $manager, $slug, Slider $slider)
    {
        $album = $repo->findOneBy(['slug' => $slug]);
        
        $slider->delete($album->getSlider());

        $manager->remove($album);
        $manager->flush();

        return $this->redirectToRoute('album_admin_show');
    }
}
