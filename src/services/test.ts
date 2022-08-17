/**
 * Services that return constants and random values (for test)
 */
import { test_get_charts_data } from 'src/helpers/functions';
import { TDayScheduleData } from 'src/types/types';

export const getChartData = (
  dateStart: string,
  dateEnd: string
): TDayScheduleData => {
  /**
   * TODO: Make request to get data for the specified range
   */
  return {
    breakfast: test_get_charts_data(dateStart, dateEnd),
    lunch: test_get_charts_data(dateStart, dateEnd),
    dinner: test_get_charts_data(dateStart, dateEnd),
  };
};
