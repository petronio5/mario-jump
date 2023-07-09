const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const somMeldey = new Audio();
somMeldey.src = "/sons/meldey.mp3";
somMeldey.play();

const somGameOver = new Audio();
somGameOver.src = "/sons/gameover.wav";

const somJump = new Audio();
somJump.src = "/sons/jump.wav";

const jump = () => {
  mario.classList.add("jump");
  somJump.play();
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.left = `${marioPosition}px`;

    mario.src = "imagens/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    somMeldey.pause();
    somGameOver.play();
    setTimeout(() => {
      window.location.reload(false);
    }, 5000);

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
