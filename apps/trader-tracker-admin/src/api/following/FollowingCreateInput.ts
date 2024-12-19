import { TraderWhereUniqueInput } from "../trader/TraderWhereUniqueInput";

export type FollowingCreateInput = {
  trader?: TraderWhereUniqueInput | null;
  userId?: string | null;
};
