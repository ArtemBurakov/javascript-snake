const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let running = false;

let snake = new Snake();
let food = new Food();

function setUp() {
  running = true;
  food.generate();

  interval = window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    food.draw();
    snake.update();
    snake.draw();
  }, 250);
}

window.addEventListener('keydown', ((evt) => {
  if (evt.keyCode == 32 && running == false) {
    setUp();
  }
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));

window.onload = () => {
  snake.draw();
}
