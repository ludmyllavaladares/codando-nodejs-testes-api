// var N1 = prompt('Digite o primeiro número')
// var N2 = prompt('Digite o segundo número')

var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var button = document.querySelector("button");
//console.log(button);

button.onclick = function() {
    var soma = somar(number1.value, number2.value);
    document.write('<p> total da soma foi = ', soma, '</p>')
}


// var soma = somar(N1, N2)
// var subtracao = subtrair(N1, N2)
// var multiplicacao = multiplicar(N1, N2)
// var divisao = dividir(N1, N2)

// document.write('O total da soma foi = ', soma, '<br>')
// document.write('O total da subtração foi = ', subtracao, '<br>')
// document.write('O total da multiplicação foi = ', multiplicacao, '<br>')
// document.write('O total da divisão foi = ', divisao, '<br>')

// function somar (N1, N2){
//     var soma = parseInt(N1) + parseInt(N2)
//     return soma
// }

// function subtrair (N1, N2){
//     var subtracao = parseInt(N1) - parseInt(N2)
//     return subtracao
// }

// function multiplicar (N1, N2){
//     var multiplicacao = parseInt(N1) * parseInt(N2)
//     return multiplicacao
// }

// function dividir (N1, N2){
//     var divisao = parseInt(N1) / parseInt(N2)
//     return divisao
// }