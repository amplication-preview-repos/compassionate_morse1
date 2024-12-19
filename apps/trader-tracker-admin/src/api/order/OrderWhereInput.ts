import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";

export type OrderWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  position?: PositionWhereUniqueInput;
  price?: FloatNullableFilter;
  typeField?: "Option1";
};
