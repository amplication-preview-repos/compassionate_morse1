import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { TraderWhereUniqueInput } from "../trader/TraderWhereUniqueInput";

export type PositionWhereInput = {
  amount?: FloatNullableFilter;
  currentPrice?: FloatNullableFilter;
  entryPrice?: FloatNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  trader?: TraderWhereUniqueInput;
  typeField?: "Option1";
};
