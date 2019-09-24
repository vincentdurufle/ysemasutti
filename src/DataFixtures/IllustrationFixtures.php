<?php

namespace App\DataFixtures;

use App\DataFixtures\Faker;
use App\Entity\Illustration;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class IllustrationFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');

        for ($i = 1; $i <= 6; $i++) {
            $illustration = new Illustration();

            $text = '<p>' . join($faker->paragraphs(2), '</p><p>') . '</p>';

            $illustration->setTitle($faker->words($nb = 2, $asText = true));
            $illustration->setText($text);
            $illustration->setThumbnail('something');
            $illustration->setImageFile();
            $illustration->setPrice($faker->numberBetween($min = 100, $max = 200));
            $illustration->setActive(false);
            $illustration->setDateCreation($faker->dateTime($max = 'now'));

            $manager->persist($illustration);
        }
        $user = new User();

        $user->setUsername('admin');
        $user->setRoles(['ROLE_ADMIN']);
        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,'admin12'));
        
            $manager->persist($user);
        $manager->flush();
    }
}
