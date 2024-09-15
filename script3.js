const readlineSync = require('readline-sync');


const usuarioBD = {
    username: 'admin',
    password: '12345'
};

let tentativas = 0;
const maxTentativas = 3;
let logado = false;

while (tentativas <maxTentativas && !logado){

    console.log(`Tentativa ${tentativas +1} de ${maxTentativas}`);

    const username =
     readlineSync.question('Digite seu usuário: ');

    if(username !== usuarioBD.username){
        console.log('nome de usuário incorreto!\n');
        tentativas++;
        continue;
    }

    const password = 
     readlineSync.question('Digite sua senha', {
        hideEchoBack: true
     });

     if(password === usuarioBD.password){
        logado =true;
        console.log(`Bem vindo ao sistema!  ${username}` );
     }else{
        console.log('Senha incorreta!\n');
        tentativas++;
     }

}
if(!logado){
    console.log('Você excedeu o número máximo de' + 
        ' tentativas. Acesso bloqueado');
}

