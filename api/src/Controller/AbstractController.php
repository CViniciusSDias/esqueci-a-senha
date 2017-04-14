<?php
namespace EsqueciASenha\Controller;

use CViniciusSDias\DependencyResolver\Resolver;

abstract class AbstractController
{
    protected $resolver;

    public function __construct()
    {
        $this->resolver = new Resolver();
    }

    public function getResolver()
    {
        return $this->resolver;
    }
}