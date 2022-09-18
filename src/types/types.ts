/**
 * Schedules of the day to eat
 */
export type TDaySchedule = 'breakfast' | 'lunch' | 'dinner';

/**
 *
 */
type TMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'Agost'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

/**
 * Schedule Day Data
 */
export type TDayScheduleData = {
  [key in TDaySchedule]: number[];
};

/**
 * Schedule Total Data
 */
export type TTotalScheduleData = {
  [key in TDaySchedule]: number;
};

/**
 * Date Range
 */
export interface IDateRange {
  from: string;
  to: string;
}

/**
 * Data for Charts
 */
export interface IRangeData {
  range: IDateRange;
  values: TDayScheduleData;
}

/**
 *
 */
export type TMonthCost = {
  [key in TMonth]: number;
};
