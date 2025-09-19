"use strict";
// Node.js -> permite o recebimento de um fluxo de
//dados, inseridos pela linha de comando
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var mensagens_1 = __importDefault(require("./mensagens"));
var multiplicacao_1 = __importDefault(require("./multiplicacao"));
var soma_1 = __importDefault(require("./soma"));
var subtracao_1 = __importDefault(require("./subtracao"));
var bhaskara_1 = __importDefault(require("./bhaskara"));
var mensagens = new mensagens_1.default();
var iniciar = function () {
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question("Quais s\u00E3o seus n\u00FAmeros e a opera\u00E7\u00E3o desejada?\n", function (valor) {
        var instrucoes = valor.split(' ');
        var operacao = instrucoes[instrucoes.length - 1];
        console.log("Estas foram suas instru\u00E7\u00F5es: ".concat(instrucoes, "\n"));
        switch (operacao.toLowerCase()) {
            case 'somar':
                var soma = new soma_1.default();
                var num1Soma = Number(instrucoes[0]);
                var num2Soma = Number(instrucoes[1]);
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(soma.calcular(num1Soma, num2Soma), "\n"));
                break;
            case 'subtrair':
                var subtracao = new subtracao_1.default();
                var num1Sub = Number(instrucoes[0]);
                var num2Sub = Number(instrucoes[1]);
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(subtracao.calcular(num1Sub, num2Sub), "\n"));
                break;
            case 'multiplicar':
                var multiplicacao = new multiplicacao_1.default();
                var num1Mult = Number(instrucoes[0]);
                var num2Mult = Number(instrucoes[1]);
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(multiplicacao.calcular(num1Mult, num2Mult), "\n"));
                break;
            case 'bhaskara':
                var bhaskara = new bhaskara_1.default();
                var a = Number(instrucoes[0]);
                var b = Number(instrucoes[1]);
                var c = Number(instrucoes[2]);
                if (isNaN(a) || isNaN(b) || isNaN(c) || instrucoes.length !== 4) {
                    console.log("Entrada inválida. Para Bhaskara, use: [a] [b] [c] bhaskara");
                    break;
                }
                var resultadoBhaskara = bhaskara.calcular(a, b, c);
                if (Array.isArray(resultadoBhaskara)) {
                    if (resultadoBhaskara.length === 1) {
                        console.log("A equa\u00E7\u00E3o possui uma \u00FAnica raiz: x = ".concat(resultadoBhaskara[0]));
                    }
                    else {
                        console.log("As ra\u00EDzes da equa\u00E7\u00E3o s\u00E3o: x1 = ".concat(resultadoBhaskara[0], " e x2 = ").concat(resultadoBhaskara[1]));
                    }
                }
                else {
                    console.log(resultadoBhaskara);
                }
                break;
            case 'sair':
                console.log("At\u00E9 uma pr\u00F3xima, falou...");
                leitor.close();
                return;
            default:
                console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
        }
        leitor.close();
        mensagens.comoUsar();
        iniciar();
    });
};
mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();
