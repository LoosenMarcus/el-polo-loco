class Chicken extends MovableObj {
  multiplier = Math.random() * 50;
  speedY = 10;
  health = 100;

  offset = {
    top: 0,
    bottom: 5,
    left: 0,
    right: 0,
  };

  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

  constructor() {
    super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 500 + Math.random() * 2000;
    this.y = 350 - this.multiplier;
    this.height = 80 + this.multiplier;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }

  /**
   *animation function for chicken is running
   */
  animate() {
    this.moveChicken();
    this.isChickenDead();
  }

  /**
   *walking animation and movement to the left is executed
   */
  moveChicken() {
    this.walkingChicken = setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    this.walkingChickenAnimation = setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 150);
  }

  /**
   *is executed when the chicken is dead
   */
  isChickenDead() {
    setInterval(() => {
      if (this.isDead()) {
        this.loadImage(this.IMAGES_DEAD);
        clearInterval(this.walkingChickenAnimation);
        clearInterval(this.walkingChicken);
        setTimeout(() => {
          this.y += this.speedY;
        }, 500);
      }
    }, 50);
  }
}
