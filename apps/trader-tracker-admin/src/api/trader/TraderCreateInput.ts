import { FollowingCreateNestedManyWithoutTradersInput } from "./FollowingCreateNestedManyWithoutTradersInput";
import { PositionCreateNestedManyWithoutTradersInput } from "./PositionCreateNestedManyWithoutTradersInput";

export type TraderCreateInput = {
  followings?: FollowingCreateNestedManyWithoutTradersInput;
  name?: string | null;
  positions?: PositionCreateNestedManyWithoutTradersInput;
  score?: number | null;
  traderId?: string | null;
};
