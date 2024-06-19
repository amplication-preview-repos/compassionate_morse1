import { OrderCreateNestedManyWithoutPositionsInput } from "./OrderCreateNestedManyWithoutPositionsInput";
import { TraderWhereUniqueInput } from "../trader/TraderWhereUniqueInput";

export type PositionCreateInput = {
  amount?: number | null;
  currentPrice?: number | null;
  entryPrice?: number | null;
  orders?: OrderCreateNestedManyWithoutPositionsInput;
  trader?: TraderWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
