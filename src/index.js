;const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvas_wigth = canvas.width = 600;
const canvas_height = canvas.height = 600;
let playState = 'run';

const myImage = new Image(100, 200);
myImage.src = "../images/shadow_dog.png";

let gameFrame = 0;
const segestFrame = 5;

const sprite_wigth = 575;
const sprite_higth = 523;
const spriteAnimation = [];
const animationState = [
  {
    name: 'idle',
    frame: 7,
  },
  {
    name: 'jump',
    frame: 7,
  },
  {
    name: 'fall',
    frame: 7,
  },
  {
    name: 'run',
    frame: 9,
  },
  {
    name: 'dizzy',
    frame: 11,
  },
  {
    name: 'sit',
    frame: 5,
  },
  {
    name: 'roll',
    frame: 7
  }, 
  {
    name: 'bite',
    frame: 7,
  },
  {
    name: 'ko',
    frame: 12,
  },
  {
    name: 'gethit',
    frame: 4,
  }
];

animationState.forEach((state, index) => {
  let frame = {
    loc: [],
  };

  for (let j = 0; j < state.frame; j++) {
    let positionX = j * sprite_wigth;
    let positionY = index * sprite_higth;

    frame.loc.push({ x: positionX, y: positionY });
  };

  spriteAnimation[state.name] = frame;
});

function animate() {
  ctx.clearRect(0, 0, canvas_wigth, canvas_height);

  let position = Math.floor(gameFrame / segestFrame) % spriteAnimation[playState].loc.length;
  let frameX = sprite_wigth * position;
  let frameY = spriteAnimation[playState].loc[position].y;

  ctx.drawImage(myImage, frameX, frameY, sprite_wigth, 
  sprite_higth, 0, 0, sprite_wigth, sprite_higth);

  gameFrame++;
  requestAnimationFrame(animate)
}

animate();
