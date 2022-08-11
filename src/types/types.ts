/**
 * Schedules of the day to eat
 */
type TDaySchedule = 'breakfast' | 'lunch' | 'dinner';

/**
 * Schedule Day Data
 */
export type TDayScheduleData = {
  [key in TDaySchedule]: number[];
};

/**
 * Dates
 */
export interface IDateRange {
  from: string;
  to: string;
}

/**
 * Data for Line Charts
 */
export interface ILineChartData {
  range: IDateRange;
  values: TDayScheduleData;
}
