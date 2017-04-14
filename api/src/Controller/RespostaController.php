<?php
namespace EsqueciASenha\Controller;

use EsqueciASenha\Services\EmailResposta;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class RespostaController extends AbstractController
{
    public function recuperar(Request $request): Response
    {
        $data = json_decode($request->getContent());
        $email = filter_var($data->email, FILTER_VALIDATE_EMAIL);
        if ($email === false) {
            return new JsonResponse(['mensagem' => 'O e-mail cadastrado não é válido'], 400);
        }

        $resposta = filter_var($data->resposta, FILTER_SANITIZE_STRING);
        /** @var EmailResposta $emailResposta */
        $emailResposta = $this->getResolver()->resolve(EmailResposta::class);
        if (!$emailResposta->enviarResposta($email, $resposta)) {
            return new JsonResponse(['mensagem' => $emailResposta->getErro()], 500);
        }

        return new JsonResponse(['mensagem' => 'OK']);
    }
}