class Greeter {
  greeting: string,
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hej, " + this.greeting;
  }

}
