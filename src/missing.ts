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

    this.missingComponent = parameters.id;
  }
}
