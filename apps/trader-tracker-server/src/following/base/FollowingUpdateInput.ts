/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TraderWhereUniqueInput } from "../../trader/base/TraderWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FollowingUpdateInput {
  @ApiProperty({
    required: false,
    type: () => TraderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TraderWhereUniqueInput)
  @IsOptional()
  @Field(() => TraderWhereUniqueInput, {
    nullable: true,
  })
  trader?: TraderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userId?: string | null;
}

export { FollowingUpdateInput as FollowingUpdateInput };
