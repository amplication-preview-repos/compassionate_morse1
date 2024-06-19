import { SortOrder } from "../../util/SortOrder";

export type TraderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  score?: SortOrder;
  traderId?: SortOrder;
  updatedAt?: SortOrder;
};
