import { TraderWhereInput } from "./TraderWhereInput";
import { TraderOrderByInput } from "./TraderOrderByInput";

export type TraderFindManyArgs = {
  where?: TraderWhereInput;
  orderBy?: Array<TraderOrderByInput>;
  skip?: number;
  take?: number;
};
