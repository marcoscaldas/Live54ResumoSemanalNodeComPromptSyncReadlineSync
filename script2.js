const prompt = require('prompt-sync')();

function realizarOperacao(opcao, num1, num2){

    switch(opcao){
        case '1':
            return num1 + num2;

        case '2':
            return num1 - num2;
        
        case '3':
            return num1 * num2;
        
        case '4':
            if(num2 === 0){
                return 'Não podemos dividir um valor por 0!';
            }
            return num1 / num2;

        default:
            return 'Opção inválida!';
        
    }

}

//VAI SER O NOSSO MENU

console.log('Escolha uma operação:');
console.log('1. Soma');
console.log('2. Subtração');
console.log('3. Multiplicação');
console.log('4. Divisão');

const opcao = prompt('Digite a operação desejada: ');

const num1 = parseFloat(prompt('Digite o primeiro valor: '));
const num2 = parseFloat(prompt('Digite o segundo valor: '));

const resultado = realizarOperacao(opcao, num1, num2);

console.log(`Resultado:  ${resultado}`);
