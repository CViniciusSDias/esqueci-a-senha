<?php
namespace EsqueciASenha\Services;

use PHPUnit\Framework\TestCase;

class EmailRespostaTeste extends TestCase
{
    public function testEnviarResposta()
    {
        $mailerMock = $this->createMock(\PHPMailer::class);
        $mailerMock
            ->expects($this->once())
            ->method('setFrom')
            ->with(
                $this->stringContains('carlosv775@gmail.com'),
                $this->stringContains('Vinicius Dias - Esqueci a Senha!')
            );
        $mailerMock
            ->expects($this->once())
            ->method('addAddress')
            ->with($this->stringContains('@'));
        $mailerMock
            ->expects($this->once())
            ->method('send')
            ->willReturn(true);

        $service = new EmailResposta($mailerMock);
        $service->enviarResposta('teste@email.com', '');
    }

    /**
     * @expectedException \InvalidArgumentException
     */
    public function testEmailInvalidoDeveLancarExcecao()
    {
        $mailerMock = $this->createMock(\PHPMailer::class);
        $service = new EmailResposta($mailerMock);
        $service->enviarResposta('teste', '');
    }
}
