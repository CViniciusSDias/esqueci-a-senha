<?php

ini_set('display_errors', false);
require_once __DIR__ . '/vendor/autoload.php';

use Silex\Application;
use Symfony\Component\HttpFoundation\{Request, Response};

$app = new Application();
$app['debug'] = false;
$app->post('/esqueci', '\EsqueciASenha\Controller\RespostaController::recuperar');
$app->after(function (Request $request, Response $response) {
    $response->headers->set('Access-Control-Allow-Origin', '*');
});
$app->run();