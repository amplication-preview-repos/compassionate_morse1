import { SortOrder } from "../../util/SortOrder";

export type FollowingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  traderId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
