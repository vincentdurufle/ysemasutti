<?php

namespace App\Service;

use App\Entity\Invoice;
use App\Repository\IllustrationRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class Store
{
    private $params;

    public function __construct(ParameterBagInterface $params)
    {
        $this->params = $params;
    }

    public function stripe(Request $request, IllustrationRepository $repo, ObjectManager $manager, Invoice $invoice = null) 
    {
        // Set your secret key: remember to change this to your live secret key in production
        // See your keys here: https://dashboard.stripe.com/account/apikeys
        \Stripe\Stripe::setApiKey($this->params->get('STRIPE_APIKEY_PUBLIC'));
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
            //Retrieve customer informations
            $customer = \Stripe\PaymentIntent::retrieve($session->payment_intent);
            $dataCustomer = $customer->charges->data[0]->billing_details;

            $customerAddress = json_decode(json_encode($dataCustomer->address), true); //transform object into array
            $address = implode(', ', $customerAddress);

            //Create Invoice
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

    }
}