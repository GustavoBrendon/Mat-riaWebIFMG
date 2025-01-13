<?php

$vetor = array(12,33,2,55,96,17);
for ($i = 0; $i < count($vetor); $i++){
    echo $vetor[$i], '<br>';
}

echo 'Com tipos diferentes <br>';
$vetor = array(12,13.2,14.55,'Kiko',46,67);
for ($i = 0; $i < count($vetor); $i++){
    echo $vetor[$i], '<br>';
}

echo 'Especificando os índices (foreach) <br>';
$vetor = array(10 => 12,13.2,14,20 => 55,'Kiko',46,67);
foreach ($vetor as $indice => $valor){
        echo 'Índice:'.$indice.' Valor:'." $valor ".'<br>';
}

$vetor = [
    'nome' => 'Gustavo',
    'sobrenome' => 'Brendon',
    'idade' => 45
];
    
echo '<br>';
foreach ($vetor as $i => $v){
    echo $i,': ',$v,'<br>';
}

echo '<br>Vetor criado por demanda <br>';
$v2['nome'] = 'Gustavo';
$v2['idade'] = 20;
$v2[] = 36.9;
foreach ($v2 as $i => $v){
    echo $i ,': ',$v,'<br>';
}

