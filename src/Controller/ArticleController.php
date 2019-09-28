<?php

namespace App\Controller;

use App\Entity\Article;
use App\Form\ArticleType;
use App\Repository\ArticleRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends AbstractController
{
    /**
     * @Route("/blog", name="article_show")
     */
    public function index(ArticleRepository $repo)
    {
        $articles = $repo->findBy([], ['id' => 'DESC'], 3);

        return $this->render('article/index.html.twig', [
            'articles' => $articles,
        ]);
    }
    /**
     * @Route("/admin/blog/{id}/delete", name="article_delete")
     */
    public function delete(ArticleRepository $repo, $id, ObjectManager $manager)
    {
        $article = $repo->findOneBy(['id' => $id]);
        $manager->remove($article);
        $manager->flush();

        return $this->redirectToRoute('admin_article_show');
    }

    /**
     * @Route("/admin/blog", name="admin_article_show")
     */
    public function articleInterface(ArticleRepository $repo)
    {
        $articles = $repo->findBy([], ['id' => 'DESC']);

        return $this->render('article/interface.html.twig', [
            'articles' => $articles,
        ]);
    }

    /**
     * @Route("/admin/article/add", name="article_upload")
     * @Route("/admin/article/{slug}/update", name="article_update")
     */
    public function upload_form(Article $article = null, Request $request, ObjectManager $manager)
    {

        if (!$article) {
            $article = new Article();
        }

        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->addFlash('success', 'L\'article a bien été ajouté/mis à jour !');

            $manager->persist($article);
            $manager->flush();

            return $this->redirectToRoute('admin_article_show');
        }
        return $this->render('article/uploadForm.html.twig', [
            'form' => $form->createView(),
        ]);
    }



    /**
     * query 3 articles with offset set by GET_['count']
     * send it back as JsonResponse
     * 
     * @Route("/blog/new", name="article_show_new")
     */
    public function articleResponse(ArticleRepository $repo):
    Response {

        $request = Request::createFromGlobals();
        $count = $request->query->get('count') * 3;

        $articles = $repo->findBy([], ['id' => 'DESC'], 3, $count);

        if (!$articles) {
            return new JsonResponse([], 404);
        } else {
            return new JsonResponse([
                'html' => $this->renderView('article/articles.html.twig', [
                    'articles' => $articles,
                ]),
            ]);
        }
    }
}
