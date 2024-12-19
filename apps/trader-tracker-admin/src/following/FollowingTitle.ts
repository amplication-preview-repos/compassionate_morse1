import { Following as TFollowing } from "../api/following/Following";

export const FOLLOWING_TITLE_FIELD = "userId";

export const FollowingTitle = (record: TFollowing): string => {
  return record.userId?.toString() || String(record.id);
};
