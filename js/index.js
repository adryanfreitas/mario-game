const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const buttomContainer = document.querySelector('.button-container')
const buttomStart = document.querySelector('.start-button')
let gameOver = false;

start.addEventListener('click', (e) => { 
    /**
     * Criar um evento para adicionar a classe .pipe-animation
     * Ao clicar no botão Start, fazer sumir o botão
     * Ao dar game over fazer aparecer o botão
     */
    
    if(gameOver === true) {
        window.location.reload();
        gameOver = false;
    } else {
        gameOver = true;
        buttomStart.classList.remove('start-button')
        buttomStart.classList.add('game-over')
        pipe.classList.remove('pipe-animation');
        pipe.classList.add('pipe-animation');
        buttomContainer.style.display = 'none';
        buttomStart.innerHTML = 'Game Over!'
    }

    
})

const jump = () => {
mario.classList.add('jump');

setTimeout(() => {

    mario.classList.remove('jump');

}, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
 
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        buttomContainer.style.display = 'flex'

        clearInterval(loop);

    }

} , 10);

document.addEventListener('keydown', jump);
document.addEventListener("click", jump);
