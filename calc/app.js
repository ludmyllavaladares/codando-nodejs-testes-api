/*var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var button = document.getElementById('button');

button.onclick = function(soma) {
    var soma = somar(number1.value, number2.value);
    document.write('<p> Total da soma foi = ', soma, '</p>');
}

button.onclick = function(subtracao) {
    var subtracao = subtrair(number1.value, number2.value);
    document.write('<p> Total da subtração foi = ', subtracao, '</p>');
}

button.onclick = function(multiplicacao) {
    var multiplicacao = subtrair(number1.value, number2.value);
    document.write('<p> Total da multipicação foi = ', multiplicacao, '</p>');
}

button.onclick = function(divisao) {
    var divisao = subtrair(number1.value, number2.value);
    document.write('<p> Total da divisão foi = ', divisao, '</p>');
}*/

function calculadora(){
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var oper = document.getElementById('oper').value;

if(oper == "soma"){
   (parseInt(number1) + parseInt(number2));
    document.write('<p> Total da soma foi = ', soma, '</p>');
}else if(oper == "subtracao"){
    (parseInt(number1) - parseInt(number2));
    document.write('<p> Total da subtração foi = ', subtracao, '</p>');
}else if(oper == "multiplicacao"){
    (parseInt(number1) * parseInt(number2));
    document.write('<p> Total da multipicação foi = ', multiplicacao, '</p>');
}else{
    (parseInt(number1) / parseInt(number2));
    document.write('<p> Total da divisão foi = ', divisao, '</p>');
}
}
