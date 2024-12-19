import * as graphql from "@nestjs/graphql";
import { BinanceModuleService } from "./binancemodule.service";

export class BinanceModuleResolver {
  constructor(protected readonly service: BinanceModuleService) {}
}
