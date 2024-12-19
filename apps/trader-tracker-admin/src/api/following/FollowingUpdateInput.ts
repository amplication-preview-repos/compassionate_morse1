import { TraderWhereUniqueInput } from "../trader/TraderWhereUniqueInput";

export type FollowingUpdateInput = {
  trader?: TraderWhereUniqueInput | null;
  userId?: string | null;
};
