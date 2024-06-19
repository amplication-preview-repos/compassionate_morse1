import { OrderUpdateManyWithoutPositionsInput } from "./OrderUpdateManyWithoutPositionsInput";
import { TraderWhereUniqueInput } from "../trader/TraderWhereUniqueInput";

export type PositionUpdateInput = {
  amount?: number | null;
  currentPrice?: number | null;
  entryPrice?: number | null;
  orders?: OrderUpdateManyWithoutPositionsInput;
  trader?: TraderWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
