import { Order } from "../order/Order";
import { Trader } from "../trader/Trader";

export type Position = {
  amount: number | null;
  createdAt: Date;
  currentPrice: number | null;
  entryPrice: number | null;
  id: string;
  orders?: Array<Order>;
  trader?: Trader | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
