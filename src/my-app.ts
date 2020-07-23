import { IRouter, IContainer } from "aurelia";

export class MyApp {
  constructor(
    @IRouter private readonly router: IRouter,
    @IContainer private readonly diContainer: IContainer
  ) {}

  public async navigateTo(compName: string): Promise<void> {
    if (compName === "banana") {
      debugger;
      const comp = await import("./modules/bananas/banana");
      this.diContainer.register(comp);
      this.router.goto("banana");
    }

    if (compName === "peach") {
      debugger;
      const comp = await import("./modules/peaches/componentRegistry");
      this.diContainer.register(comp);
      this.router.goto("peach");
    }
  }
}
