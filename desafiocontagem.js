//cria uma variável determinando as vogais no array
let vogais = ["a", "e", "i", "o", "u"];
//cria uma variável determinando as consoantes no array
let consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
//cria uma variável para colocar a frase definida
let frase = "me chamo Sophia Ellen dos Santos Balico";
//coloca a variável frase e adiciono um método que vai converter todas as letras maiúsculas da frase em minúsculas 
frase = frase.toLowerCase();
//cria uma variável para pegar a frase e adiciono o método para dividir cada caractere
let frasesep = frase.split("");
//cria variáveis de contagem para os espaços, vogais e consoantes
let contadorespaco = 0;
let arrayvogais = [];
let arrayconsoantes = [];

//cria um loop para percorrer em cada caractere dividido pela frasesep
for (let i = 0; i < frasesep.length; i++) {
    //verifica se o caractere atual é uma vogal (adiciona na arrayvogais) ou uma consoante (adiciona na arrayconsoante)
    if (vogais.includes(frasesep[i])) {
        arrayvogais.push(frasesep[i]);
    } else if (consoantes.includes(frasesep[i])) {
        arrayconsoantes.push(frasesep[i]);
        //verifica se o caractere atual é um espaço, se for, é adicionado na variável contadorespaco para contar todos os espaços da frase
    } else if (frasesep[i] = " ") {
        contadorespaco++;
    }
}

//vai exibir a frase, as vogais encontadas, quantas vogais, as consoantes encontradas, quantas consoantes e a quantidade de espaços na frase
console.log("Frase:" + frase);
console.log("Vogais encontradas:" + arrayvogais.toString());
console.log("Total de vogais:" + arrayvogais.length);
console.log("Consoantes encontradas:" + arrayconsoantes.toString());
console.log("Total de consoantes:" + arrayconsoantes.length);
console.log("Total de espaços:" + contadorespaco);


//saída esperada:
//Frase:me chamo sophia ellen dos santos balico
//Vogais encontradas:e,a,o,o,i,a,e,e,o,a,o,a,i,o
//Total de vogais:14
//Consoantes encontradas:m,c,h,m,s,p,h,l,l,n,d,s,s,n,t,s,b,l,c
//Total de consoantes:19
//Total de espaços:6