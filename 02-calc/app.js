function calculadora() {
<<<<<<< HEAD
=======

>>>>>>> cf651ccd6b5765c84a0b6320bf0bef79fb106cd7
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var oper = document.getElementById('oper').value;

    if (oper == "somar") {
        soma = parseInt(number1) + parseInt(number2);
<<<<<<< HEAD
        document.write('<p> Total da soma de ', number1, ' e ', number2, ' = ', soma, '</p>');
    } else if (oper == "diminuir") {
        diminuir = parseInt(number1) - parseInt(number2);
        document.write('<p> Total da subtração de ', number1, ' e ', number2, ' = ', diminuir, '</p>');
    } else if (oper == "multiplicar") {
        multiplicar = parseInt(number1) * parseInt(number2);
        document.write('<p> Total da multiplicação de ', number1, ' e ', number2, ' = ', multiplicar, '</p>');
    } else {
        dividir = parseInt(number1) / parseInt(number2);
        document.write('<p> Total da divisão de ', number1, ' e ', number2, ' = ', dividir, '</p>');
=======
        console.log('<p> Total da soma foi = ', soma, '</p>');
    } else if (oper == "diminuir") {
        subtracao = parseInt(number1) - parseInt(number2);
        console.log('<p> Total da subtração foi = ', subtracao, '</p>');
    } else if (oper == "multiplicar") {
        multiplicacao = parseInt(number1) * parseInt(number2);
        console.log('<p> Total da multipicação foi = ', multiplicacao, '</p>');
    } else {
        divisao = parseInt(number1) / parseInt(number2);
        console.log('<p> Total da divisão foi = ', divisao, '</p>');
>>>>>>> cf651ccd6b5765c84a0b6320bf0bef79fb106cd7
    }
}
