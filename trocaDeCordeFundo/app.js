const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; // temos aqui o primeiro vetor
const btn = document.getElementById("btn");  /* PEGANDO BOTÃO NO HTML PELO ID */
const color = document.querySelector(".color"); /* PEGANDO PRIMEIRO SPAN DO DOCUMENTO PELA CLASSE */

btn.addEventListener('click', function(){/* criando evento para ação do click no botão BTN */
    //get random number between 0 - 3 colors[0]
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundColor = colors[randomNumber]; //comando que leva pro body do html e altera o estilo dele  (background)
    color.textContent = colors[randomNumber]; // troca de lugar o texto que estava na span pelo elemento selecionado dentro do primeiro vetor.


})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}