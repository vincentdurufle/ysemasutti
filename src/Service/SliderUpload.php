<?php

namespace App\Service;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class SliderUpload extends AbstractController {
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
}
