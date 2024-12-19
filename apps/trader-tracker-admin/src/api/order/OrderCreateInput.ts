import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";

export type OrderCreateInput = {
  amount?: number | null;
  position?: PositionWhereUniqueInput | null;
  price?: number | null;
  typeField?: "Option1" | null;
};
