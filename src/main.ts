// Node.js -> permite o recebimento de um fluxo de
//dados, inseridos pela linha de comando

import * as readline from 'readline';
import Mensagens from './mensagens';
import Multiplicacao from './multiplicacao';
import Soma from './soma';
import Subtracao from './subtracao';
import Bhaskara from './bhaskara';

let mensagens = new Mensagens()

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
        let instrucoes = valor.split(' ');
        let operacao = instrucoes[instrucoes.length - 1];
        
        console.log(`Estas foram suas instruções: ${instrucoes}\n`);

        switch (operacao.toLowerCase()) {
            case 'somar':
                let soma = new Soma();
                let num1Soma = Number(instrucoes[0]);
                let num2Soma = Number(instrucoes[1]);
                console.log(`O resultado da operação é: ${soma.calcular(num1Soma, num2Soma)}\n`);
                break;
            case 'subtrair':
                let subtracao = new Subtracao();
                let num1Sub = Number(instrucoes[0]);
                let num2Sub = Number(instrucoes[1]);
                console.log(`O resultado da operação é: ${subtracao.calcular(num1Sub, num2Sub)}\n`);
                break;
            case 'multiplicar':
                let multiplicacao = new Multiplicacao();
                let num1Mult = Number(instrucoes[0]);
                let num2Mult = Number(instrucoes[1]);
                console.log(`O resultado da operação é: ${multiplicacao.calcular(num1Mult, num2Mult)}\n`);
                break;
            case 'bhaskara':
                let bhaskara = new Bhaskara();
                let a = Number(instrucoes[0]);
                let b = Number(instrucoes[1]);
                let c = Number(instrucoes[2]);
                
                if (isNaN(a) || isNaN(b) || isNaN(c) || instrucoes.length !== 4) {
                    console.log("Entrada inválida. Para Bhaskara, use: [a] [b] [c] bhaskara");
                    break;
                }

                let resultadoBhaskara = bhaskara.calcular(a, b, c);

                if (Array.isArray(resultadoBhaskara)) {
                    if (resultadoBhaskara.length === 1) {
                        console.log(`A equação possui uma única raiz: x = ${resultadoBhaskara[0]}`);
                    } else {
                        console.log(`As raízes da equação são: x1 = ${resultadoBhaskara[0]} e x2 = ${resultadoBhaskara[1]}`);
                    }
                } else {
                    console.log(resultadoBhaskara);
                }
                break;
            case 'sair':
                console.log(`Até uma próxima, falou...`);
                leitor.close();
                return;
            default:
                console.log(`Operação não entendida :(`);
        }
        leitor.close()
        mensagens.comoUsar()
        iniciar()
    });
}
mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();