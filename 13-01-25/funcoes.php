<?php 

function funcao1($msg){
    echo "Mensagem: $msg <br>";
}
funcao1('Hello');

$f2 = function (){
    echo 'Função sem nome guardada em variáveis.<br>';
};
$f2();

echo '<br>';
$f3 = fn($x) => $x ** 2;
echo $f3(3);

