<?php
namespace EsqueciASenha\Services;

use PHPMailer;

class EmailResposta
{
    private $mailer;
    private $erro;

    public function __construct(PHPMailer $mailer)
    {
        $this->mailer = $mailer;
        $this->erro = '';
    }

    public function enviarResposta(string $email, string $resposta): bool
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new \InvalidArgumentException('E-mail inválido');
        }
        $mensagem = $this->getMensagem($resposta);
        $this->configureMailer();
        $this->mailer->setFrom('carlosv775@gmail.com', 'Vinicius Dias - Esqueci a Senha!');
        $this->mailer->addAddress($email);
        $this->mailer->Subject = 'Esqueci a Senha! - Recuperação de resposta';
        $this->mailer->Body = $mensagem;

        $enviado = $this->mailer->send();
        $this->erro = $this->mailer->ErrorInfo;

        return $enviado;
    }

    public function getErro(): string
    {
        return $this->erro;
    }

    private function getMensagem(string $resposta)
    {
        $mensagem = [];
        $mensagem[] = 'Sua resposta secreta para acesso ao aplicativo Esqueci a Senha! é a seguinte:';
        $mensagem[] = $resposta;
        $mensagem[] = '';
        $mensagem[] = 'Guarde-a bem, pois nunca se sabe quando você vai se esquecer da senha deste email, não é mesmo?';
        $mensagem[] = '';
        $mensagem[] = 'Atenciosamente,';
        $mensagem[] = 'Vinicius Dias - Desenvolvedor de Esqueci a Senha!';
        $mensagem[] = '(24) 99276 - 5829';
        $mensagem[] = 'carlosv775@gmail.com';

        return implode("\n", $mensagem);
    }

    private function configureMailer()
    {
        /*$this->mailer->isSMTP();
        $this->mailer->Host = 'smtp.gmail.com';
        $this->mailer->Port = 587;
        $this->mailer->SMTPSecure = 'tls';
        $this->mailer->SMTPAuth = true;
        $this->mailer->Username = 'carlosv775@gmail.com';
        $this->mailer->Password = 'mypassword';*/
        $this->mailer->CharSet = 'UTF-8';
    }
}
