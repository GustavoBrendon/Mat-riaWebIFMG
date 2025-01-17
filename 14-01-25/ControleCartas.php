<?php
require_once './Conexao.php';
class ControleCarta
{
    public function inserir(){
        $sql = 'insert into cartas(nome, descricao)
        values (?,?)';
        $nome = 'Carta base';
        $desc = 'Uma carta qualquer';
        $preparado = Conexao::preparaComando($sql);
        $preparado->bindValue(1, $nome);
        $preparado->bindValue(2, $desc);
        if($preparado->execute()){
            echo 'Gravou';
        }else{
            echo 'Erro: ';
            echo $preparado->errorInfo();
        }
    }

    public function listar(){
        $sql = 'select * from cartas';
        $todos = [];
        $preparado = Conexao::preparaComando($sql);
        if($preparado->execute()){
            $todos = $preparado->fetchAll(PDO::FETCH_ASSOC);
        }
        return $todos;
    }
}