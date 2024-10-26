function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value) || 0;
    var num2 = parseFloat(document.getElementById("num2").value) || 0;
    var resultado;

    
    switch (operation) {
        case 'sum':
            resultado = num1 + num2;
            break;
        case 'res':
            resultado = num1 - num2;
            break;
        case 'mul':
            resultado = num1 * num2;
            break;
        case 'div':
            if (num2 == 0) {
            resultado = "Error - No se puede dividir por 0";
            }else{
            resultado = num1 / num2;}
            break;
    }

    document.getElementById("result").value = resultado;
}
