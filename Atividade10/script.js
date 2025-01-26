 const numeros = [1, 2, 3, 4, 5];

        function testMap() {
            const dobro = numeros.map(num => num * 2);
            document.getElementById('resposta').innerText = `map(): [${dobro}]`;
        }

        function testFilter() {
            const e = numeros.filter(num => num % 2 === 0);
            document.getElementById('resposta').innerText = `filter(): [${e}]`;
        }

        function testReduce() {
            const soma = numeros.reduce((acc, num) => acc + num, 0);
            document.getElementById('resposta').innerText = `reduce(): ${soma}`;
        }

        function testForEach() {
            let result = '';
            numeros.forEach(num => result += num + ' ');
            document.getElementById('resposta').innerText = `forEach(): ${result}`;
        }