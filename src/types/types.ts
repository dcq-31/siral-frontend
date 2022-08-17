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
