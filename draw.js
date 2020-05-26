const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake = new Snake();
let food = new Food();

function setUp() {
  food.generate();

  window.setInterval(() => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.check();
    food.draw();
    snake.update();
    snake.draw();
  }, 250);
}

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));

setUp();
