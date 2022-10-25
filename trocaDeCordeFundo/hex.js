const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // vetor gerado com todas as variações de combinação de parametros hexadecimais.
//#f15025
const btn = document.getElementById("btn"); //buscando elemento BOTAO pelo id btn - buscando o botão para realizar ação.
const color = document.querySelector(".color"); //criando variavel pela classe do SPAN (aqui o nome da cor gerada vai ser mostrado.)

btn.addEventListener('click', function(){ //criando função para captar função de clique do mouse.
    let hexColor = "#"; //forma de declarar variável.
    for(let i = 0; i<6;i++){//utilizando repetição FOR.
        hexColor += hex[getRandomNumber()]; //toda vez que for declarar uma função, não esquecer dos ().
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){ //função que gera valores aleatórios com o comando Math.random (decimal aleatorio entre 0 e 1)
    return Math.floor(Math.random() * hex.length);
    //Math.floor() é função que retorna arredondamento de um número decimal existente.
}