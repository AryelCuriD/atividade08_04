function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;


    if (operacao === 'soma') {
        resultado = num1 + num2;
    } else if (operacao === 'sub') {
        resultado = num1 - num2;
    } else if (operacao === 'divs') {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = 'Erro: Divisão por zero';
        }
    } else if (operacao === 'mult') {
        resultado = num1 * num2;
    } else {
        resultado = 'Operação inválida';
    }

    document.getElementById('resultado').innerText = resultado;
}


document.getElementById('soma').addEventListener('click', function() {
    calcular('soma');
});

document.getElementById('sub').addEventListener('click', function() {
    calcular('sub');
});

document.getElementById('divs').addEventListener('click', function() {
    calcular('divs');
});

document.getElementById('mult').addEventListener('click', function() {
    calcular('mult');
});

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}