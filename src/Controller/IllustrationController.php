<?php

namespace App\Controller;

use App\Entity\Illustration;
use App\Form\IllustrationType;
use App\Repository\IllustrationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Asset\Package;
use Symfony\Component\Asset\VersionStrategy\EmptyVersionStrategy;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;



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
     * @Route("/shop/illustration/{slug}", name="illustration_single_show")
     */
    public function illustrationPage(IllustrationRepository $repo, $slug)
    {
        $illustration = $repo->findOneBy(['slug' => $slug]);

        $package = new Package(new EmptyVersionStrategy());
        $image = $package->getUrl('uploads/illustration/'.$illustration->getImage().'');

        // Set your secret key: remember to change this to your live secret key in production
        // See your keys here: https://dashboard.stripe.com/account/apikeys
        \Stripe\Stripe::setApiKey('sk_test_B8sSiB1kCYozq7aP8DX68Xib00Gh5u9JtT');

        $session = \Stripe\Checkout\Session::create([
            'billing_address_collection' => 'required',
            'payment_method_types' => ['card'],
            'line_items' => [[
                'name' => $illustration->getTitle(),
                'description' => 'something',
                'images' => ["https://74500d28.ngrok.io/$image"],
                'amount' => $illustration->getPrice(),
                'currency' => 'eur',
                'quantity' => 1,
            ]],
            'success_url' => 'https://4a5f04b7.ngrok.io/shop/success?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => 'https://localhost:800/shop/'.$slug.'/cancel',
        ]);

        return $this->render('illustration/single.html.twig', [
            'illustration' => $illustration,
            'stripe_session' => $session
        ]);
    }


    /**
     * @Route("/admin/illustration/add", name="illustration_upload")
     * @Route("/admin/illustration/{slug}/update", name="illustration_update")
     */
    public function upload_form(Illustration $illustration = null, Request $request, ObjectManager $manager)
    {
        
        if(!$illustration) {
            $illustration = new Illustration();
        }
            $form = $this->createForm(IllustrationType::class, $illustration);

            $form->handleRequest($request);

            if($form->isSubmitted() && $form->isValid()) {
                if(!$illustration->getId()) {
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
