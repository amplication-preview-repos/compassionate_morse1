import { SortOrder } from "../../util/SortOrder";

export type PositionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currentPrice?: SortOrder;
  entryPrice?: SortOrder;
  id?: SortOrder;
  traderId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
