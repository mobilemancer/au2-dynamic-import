export class OrangeComponent {
  public text = false;

  constructor() {
    console.log("🍊-🧱");
  }

  public clicked(): void {
    this.text = !this.text;
  }
}
