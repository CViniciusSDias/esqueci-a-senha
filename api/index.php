<?php

ini_set('display_errors', false);
require_once __DIR__ . '/vendor/autoload.php';

use Silex\Application;

$app = new Application();
$app['debug'] = false;
$app->post('/esqueci', '\EsqueciASenha\Controller\RespostaController::recuperar');
$app->run();