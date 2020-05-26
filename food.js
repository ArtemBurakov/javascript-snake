class Food{
  draw() {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  generate() {
    this.x = Math.floor(Math.random()*rows)*scale;
    this.y = Math.floor(Math.random()*columns)*scale;

    for (let i = 0; i < snake.tail.length; i++) {
      if (this.x == snake.tail[i].x && this.y == snake.tail[i].y) {
        console.log('yes');
        this.generate();
      } else {
        this.draw();
      }
    }
  }
}
