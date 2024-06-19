import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TraderServiceBase } from "./base/trader.service.base";

@Injectable()
export class TraderService extends TraderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
