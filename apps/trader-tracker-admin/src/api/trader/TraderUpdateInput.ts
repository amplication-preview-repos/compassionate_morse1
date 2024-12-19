import { FollowingUpdateManyWithoutTradersInput } from "./FollowingUpdateManyWithoutTradersInput";
import { PositionUpdateManyWithoutTradersInput } from "./PositionUpdateManyWithoutTradersInput";

export type TraderUpdateInput = {
  followings?: FollowingUpdateManyWithoutTradersInput;
  name?: string | null;
  positions?: PositionUpdateManyWithoutTradersInput;
  score?: number | null;
  traderId?: string | null;
};
