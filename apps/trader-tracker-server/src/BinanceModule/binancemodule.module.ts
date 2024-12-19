import { Module } from "@nestjs/common";
import { BinanceModuleService } from "./binancemodule.service";
import { BinanceModuleController } from "./binancemodule.controller";
import { BinanceModuleResolver } from "./binancemodule.resolver";

@Module({
  controllers: [BinanceModuleController],
  providers: [BinanceModuleService, BinanceModuleResolver],
  exports: [BinanceModuleService],
})
export class BinanceModuleModule {}
