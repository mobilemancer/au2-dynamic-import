import { IContainer, IRouter } from "aurelia";

export class PeachTop {
  constructor(
    @IContainer private readonly diContainer: IContainer,
    @IRouter private readonly router: IRouter
  ) {
    console.log("🍑-🔝");
  }

  public async enter(): Promise<void> {
    const comp = await import("./modules/peaches/componentRegistry");
    this.diContainer.register(comp);
    this.router.goto("peach");
  }
}
