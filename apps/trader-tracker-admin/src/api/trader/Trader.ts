import { Following } from "../following/Following";
import { Position } from "../position/Position";

export type Trader = {
  createdAt: Date;
  followings?: Array<Following>;
  id: string;
  name: string | null;
  positions?: Array<Position>;
  score: number | null;
  traderId: string | null;
  updatedAt: Date;
};
