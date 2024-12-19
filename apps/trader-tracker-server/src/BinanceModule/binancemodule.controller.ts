import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BinanceModuleService } from "./binancemodule.service";

@swagger.ApiTags("binanceModules")
@common.Controller("binanceModules")
export class BinanceModuleController {
  constructor(protected readonly service: BinanceModuleService) {}
}
