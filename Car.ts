class Car {
  engine: string;
  constructor(enigne: string) {
    this.engine = engine;
  }

  start() {
    alert("Started: " + this.eninge);
  }

  stop() {
    alert("Started: " + this.eninge);
  }
}

window.onload = function () {
  let car = new Car("V6");
  car.start();
  car.stop();
};
