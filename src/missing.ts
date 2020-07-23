import { IRouter, IContainer } from "aurelia";

export class Missing {
  public static parameters = ["id"];
  public missingComponent: string;

  constructor(
    @IRouter private readonly router: IRouter,
    @IContainer private readonly diContainer: IContainer
  ) {}

  public async enter(parameters): Promise<void> {
    if (parameters.id === "banana") {
      const comp = await import("./modules/bananas/banana");
      this.diContainer.register(comp);
      this.router.goto("banana");
    }

    if (parameters.id === "peach" || parameters.id === "%F0%9F%8D%91") {
      this.router.goto("peach-top");
    }

    this.missingComponent = parameters.id;
  }
}
