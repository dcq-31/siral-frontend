import { TDaySchedule } from './all';

interface IProduct {
  title: string;
  price: number;
  /*
    TODO: Add more attributes like quantity, etc.
   */
}

export interface IOffer {
  date: string;
  type: TDaySchedule;
  products: IProduct[];
  total_cost: number;
}

export interface IFullDayOffer {
  date: string;
  breakfast: IOffer;
  lunck: IOffer;
  dinner: IOffer;
}
