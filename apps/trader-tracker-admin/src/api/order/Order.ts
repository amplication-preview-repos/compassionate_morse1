import { Position } from "../position/Position";

export type Order = {
  amount: number | null;
  createdAt: Date;
  id: string;
  position?: Position | null;
  price: number | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
