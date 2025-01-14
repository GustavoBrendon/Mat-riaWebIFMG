<?php 
require_once './ControleCartas.php';

$controle = new ControleCarta();
$controle->inserir();

var_dump($controle->listar());