import { FollowingListRelationFilter } from "../following/FollowingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PositionListRelationFilter } from "../position/PositionListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TraderWhereInput = {
  followings?: FollowingListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  positions?: PositionListRelationFilter;
  score?: FloatNullableFilter;
  traderId?: StringNullableFilter;
};
