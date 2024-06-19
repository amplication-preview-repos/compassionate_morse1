import { Trader } from "../trader/Trader";

export type Following = {
  createdAt: Date;
  id: string;
  trader?: Trader | null;
  updatedAt: Date;
  userId: string | null;
};
