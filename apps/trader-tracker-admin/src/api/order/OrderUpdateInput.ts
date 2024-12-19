import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";

export type OrderUpdateInput = {
  amount?: number | null;
  position?: PositionWhereUniqueInput | null;
  price?: number | null;
  typeField?: "Option1" | null;
};
