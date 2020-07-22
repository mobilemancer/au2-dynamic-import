import { IRouter, IContainer } from "aurelia";

export class MyApp {
  constructor(
    @IRouter private readonly router: IRouter,
    @IContainer private readonly diContainer: IContainer
  ) {}

  public async navigateTo(compName: string): Promise<void> {
    if (compName === "banana") {
      const comp = await import("./modules/bananas/banana");
      this.diContainer.register(comp);
      this.router.goto("banana");
    }
  }
}
