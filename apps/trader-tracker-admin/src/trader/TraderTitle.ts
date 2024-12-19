import { Trader as TTrader } from "../api/trader/Trader";

export const TRADER_TITLE_FIELD = "name";

export const TraderTitle = (record: TTrader): string => {
  return record.name?.toString() || String(record.id);
};
