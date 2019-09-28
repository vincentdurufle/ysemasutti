<?php

namespace App\Service;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;

class Slider extends AbstractController
{

    /**
     * upload multiple files to folder
     *
     * @param array $files
     * @return array
     */
    public function upload(array $files): array
    {
        $sliderArray = [];
        foreach ($files as $file) {
            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
            $newFilename = $safeFilename . '-' . uniqid() . '.' . $file->guessExtension();

            try {
                $file->move($this->getParameter('slider_directory'), $newFilename);
            } catch (FileException $e) {
                $this->addFlash('error', "$e");
            }
            array_push($sliderArray, $newFilename);
        }
        return $sliderArray;
    }


    /**
     * delete multiple files of server in slider folder
     *
     * @param array $files
     * @return void
     */
    public function delete(array $files)
    {
        $filesystem = new Filesystem;

        foreach ($files as $file) {
            try {
                $filesystem->remove($this->getParameter('slider_directory') . '/' . $file);
            } catch (IOExceptionInterface $e) {
                echo "An error occurred while creating your directory at " . $e->getPath();
            }
        }
    }
}
