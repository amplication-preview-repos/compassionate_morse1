import { StringFilter } from "../../util/StringFilter";
import { TraderWhereUniqueInput } from "../trader/TraderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FollowingWhereInput = {
  id?: StringFilter;
  trader?: TraderWhereUniqueInput;
  userId?: StringNullableFilter;
};
