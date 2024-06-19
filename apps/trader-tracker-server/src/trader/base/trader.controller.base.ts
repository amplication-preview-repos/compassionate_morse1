/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TraderService } from "../trader.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TraderCreateInput } from "./TraderCreateInput";
import { Trader } from "./Trader";
import { TraderFindManyArgs } from "./TraderFindManyArgs";
import { TraderWhereUniqueInput } from "./TraderWhereUniqueInput";
import { TraderUpdateInput } from "./TraderUpdateInput";
import { FollowingFindManyArgs } from "../../following/base/FollowingFindManyArgs";
import { Following } from "../../following/base/Following";
import { FollowingWhereUniqueInput } from "../../following/base/FollowingWhereUniqueInput";
import { PositionFindManyArgs } from "../../position/base/PositionFindManyArgs";
import { Position } from "../../position/base/Position";
import { PositionWhereUniqueInput } from "../../position/base/PositionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TraderControllerBase {
  constructor(
    protected readonly service: TraderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Trader })
  @nestAccessControl.UseRoles({
    resource: "Trader",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTrader(@common.Body() data: TraderCreateInput): Promise<Trader> {
    return await this.service.createTrader({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        score: true,
        traderId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Trader] })
  @ApiNestedQuery(TraderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Trader",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async traders(@common.Req() request: Request): Promise<Trader[]> {
    const args = plainToClass(TraderFindManyArgs, request.query);
    return this.service.traders({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        score: true,
        traderId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Trader })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trader",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async trader(
    @common.Param() params: TraderWhereUniqueInput
  ): Promise<Trader | null> {
    const result = await this.service.trader({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        score: true,
        traderId: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Trader })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trader",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTrader(
    @common.Param() params: TraderWhereUniqueInput,
    @common.Body() data: TraderUpdateInput
  ): Promise<Trader | null> {
    try {
      return await this.service.updateTrader({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          score: true,
          traderId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Trader })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trader",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTrader(
    @common.Param() params: TraderWhereUniqueInput
  ): Promise<Trader | null> {
    try {
      return await this.service.deleteTrader({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          score: true,
          traderId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/followings")
  @ApiNestedQuery(FollowingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Following",
    action: "read",
    possession: "any",
  })
  async findFollowings(
    @common.Req() request: Request,
    @common.Param() params: TraderWhereUniqueInput
  ): Promise<Following[]> {
    const query = plainToClass(FollowingFindManyArgs, request.query);
    const results = await this.service.findFollowings(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        trader: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/followings")
  @nestAccessControl.UseRoles({
    resource: "Trader",
    action: "update",
    possession: "any",
  })
  async connectFollowings(
    @common.Param() params: TraderWhereUniqueInput,
    @common.Body() body: FollowingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      followings: {
        connect: body,
      },
    };
    await this.service.updateTrader({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/followings")
  @nestAccessControl.UseRoles({
    resource: "Trader",
    action: "update",
    possession: "any",
  })
  async updateFollowings(
    @common.Param() params: TraderWhereUniqueInput,
    @common.Body() body: FollowingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      followings: {
        set: body,
      },
    };
    await this.service.updateTrader({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/followings")
  @nestAccessControl.UseRoles({
    resource: "Trader",
    action: "update",
    possession: "any",
  })
  async disconnectFollowings(
    @common.Param() params: TraderWhereUniqueInput,
    @common.Body() body: FollowingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      followings: {
        disconnect: body,
      },
    };
    await this.service.updateTrader({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/positions")
  @ApiNestedQuery(PositionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Position",
    action: "read",
    possession: "any",
  })
  async findPositions(
    @common.Req() request: Request,
    @common.Param() params: TraderWhereUniqueInput
  ): Promise<Position[]> {
    const query = plainToClass(PositionFindManyArgs, request.query);
    const results = await this.service.findPositions(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        currentPrice: true,
        entryPrice: true,
        id: true,

        trader: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/positions")
  @nestAccessControl.UseRoles({
    resource: "Trader",
    action: "update",
    possession: "any",
  })
  async connectPositions(
    @common.Param() params: TraderWhereUniqueInput,
    @common.Body() body: PositionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      positions: {
        connect: body,
      },
    };
    await this.service.updateTrader({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/positions")
  @nestAccessControl.UseRoles({
    resource: "Trader",
    action: "update",
    possession: "any",
  })
  async updatePositions(
    @common.Param() params: TraderWhereUniqueInput,
    @common.Body() body: PositionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      positions: {
        set: body,
      },
    };
    await this.service.updateTrader({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/positions")
  @nestAccessControl.UseRoles({
    resource: "Trader",
    action: "update",
    possession: "any",
  })
  async disconnectPositions(
    @common.Param() params: TraderWhereUniqueInput,
    @common.Body() body: PositionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      positions: {
        disconnect: body,
      },
    };
    await this.service.updateTrader({
      where: params,
      data,
      select: { id: true },
    });
  }
}