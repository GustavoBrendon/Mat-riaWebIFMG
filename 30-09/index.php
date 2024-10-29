<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desenvolvimento Web - Aula 1</title>
    <style>
        h1{
            text-align: center;
            color: blueviolet;
        }
        p {
            text-indent: 1cm;
            text-align: justify;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center;">Título</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias alias impedit necessitatibus voluptatem sunt repudiandae dolorum a, quia quod quidem dolorem, laudantium ullam vel sed? Ab consequuntur doloribus autem aliquid.</p>
    <button onclick="minhaFuncao()">Clique</button>
    <?php
    $a = 'Hello PHP';
    echo '<br>';
    echo $a;
    echo '<br>';
    ?>

</body>
<script>
    function minhaFuncao(){
        alert('Hello!');
    }
    const bt = document.querySelector('button');
    bt.addEventListener('click', minhaFuncao);
</script>
</html>