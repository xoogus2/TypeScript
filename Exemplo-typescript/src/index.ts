// const saudacao = (nome: string): string => {
//     return `Olá, ${nome}! Aprendendo TypeScript!`;
// };

// const soma = (variavel1: number, variavel2: number): string => {
//     let total = variavel1 + variavel2 ;
//     return `Olá, pela ${total} vez!`;
// };

// console.log(saudacao("Usuario"));
// console.log(soma(2,7));

// const funcaoArray = (): any[] => {
//     let array: string[] = [
//         "João",
//         "Maria",
//         "josé"
//     ]
//     let array2: any[]= [
//         false,
//         "Maria",
//         "josé"
//     ]
//     //return array;
//     return array2;
// }

// console.log(funcaoArray());

interface Person {
nome:string,
idade:number,
isStudent:boolean
}

const people = (person : Person) => {
    return `O ${person.nome} tem ${person.idade} anos` 
}

var pessoaCadastrada = {
    nome : "Victor",
    idade : 41,
    isStudent: true
}

console.log(people(pessoaCadastrada));


