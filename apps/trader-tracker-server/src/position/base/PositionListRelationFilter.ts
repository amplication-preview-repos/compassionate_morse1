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
import { PositionWhereInput } from "./PositionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PositionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PositionWhereInput,
  })
  @ValidateNested()
  @Type(() => PositionWhereInput)
  @IsOptional()
  @Field(() => PositionWhereInput, {
    nullable: true,
  })
  every?: PositionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PositionWhereInput,
  })
  @ValidateNested()
  @Type(() => PositionWhereInput)
  @IsOptional()
  @Field(() => PositionWhereInput, {
    nullable: true,
  })
  some?: PositionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PositionWhereInput,
  })
  @ValidateNested()
  @Type(() => PositionWhereInput)
  @IsOptional()
  @Field(() => PositionWhereInput, {
    nullable: true,
  })
  none?: PositionWhereInput;
}
export { PositionListRelationFilter as PositionListRelationFilter };
