import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TraderService } from "./trader.service";
import { TraderControllerBase } from "./base/trader.controller.base";

@swagger.ApiTags("traders")
@common.Controller("traders")
export class TraderController extends TraderControllerBase {
  constructor(
    protected readonly service: TraderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
