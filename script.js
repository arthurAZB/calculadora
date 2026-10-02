function calcular(a, b, operador) {
    const num1 = Number(a);
    const num2 = Number(b);
    
    if (a.trim() === '' || b.trim() === '' || isNaN(num1) || isNaN(num2)) {
        return "Error: valores inválidos";
    }
    
    switch (operador) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': 
            return num2 !== 0 ? 
                num1 / num2 : 
                "Error: división por cero";
        default: 
            return "Operador inválido";
    }
}

function realizarOperacion(operador) {
    const num1 = document.getElementById('numero1').value;
    const num2 = document.getElementById('numero2').value;
    
    const resultado = calcular(num1, num2, operador);
    
    const resultadoDiv = document.getElementById('resultado');
    const valorResultado = document.getElementById('valorResultado');
    
    if (typeof resultado === 'string' && resultado.includes('Error')) {
        resultadoDiv.classList.add('error');
        valorResultado.textContent = resultado;
    } else {
        resultadoDiv.classList.remove('error');
        valorResultado.textContent = `Resultado: ${resultado}`;
    }
    
    resultadoDiv.style.display = 'block';
}

// Executa a soma ao pressionar Enter no segundo campo
document.getElementById('numero2').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        realizarOperacion('+');
    }
});