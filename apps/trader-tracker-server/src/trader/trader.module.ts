import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TraderModuleBase } from "./base/trader.module.base";
import { TraderService } from "./trader.service";
import { TraderController } from "./trader.controller";
import { TraderResolver } from "./trader.resolver";

@Module({
  imports: [TraderModuleBase, forwardRef(() => AuthModule)],
  controllers: [TraderController],
  providers: [TraderService, TraderResolver],
  exports: [TraderService],
})
export class TraderModule {}
