class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total =  0;
    this.tail = [];
  }

  draw() {
    ctx.fillStyle = "#00ff00";

    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  gameover() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    food.generate();
  }

  update() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }

    this.tail[this.total - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width) {
      this.gameover();
    }

    if (this.y > canvas.height) {
      this.gameover();
    }

    if (this.x < 0) {
      this.gameover();
    }

    if (this.y < 0) {
      this.gameover();
    }
  }

  changeDirection(direction) {
    switch (direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = +scale;
        break;
      case 'Left':
        this.ySpeed = 0;
        this.xSpeed = -scale;
        break;
      case 'Right':
        this.ySpeed = 0;
        this.xSpeed = +scale;
        break;
    }
  }

  eat(food) {
    if (food.x == this.x && food.y == this.y) {
      this.total++;
      return true;
    }
    return false;
  }

  check() {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x == this.tail[i].x && this.y == this.tail[i].y) {
        this.gameover();
      }
    }
    if (snake.eat(food)) {
      food.generate();
    }
  }
}
