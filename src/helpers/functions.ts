/**
 * Helpers functions
 */

import { date } from 'quasar';

// Constants
import {
  ONE_DAY,
  FRIENDLY_DATE_MASK,
  ISO_DATE_MASK,
} from 'src/helpers/constants';

// Types
import { TMonthCost } from 'src/types/types';

/**
 * Get an array of number values for [start - end] date range
 */
export const test_get_charts_data = (
  start: string,
  end: string
): Array<number> => {
  const endTime = new Date(end).getTime();
  const minCost = 12;
  const data: Array<number> = [];
  for (let i = new Date(start).getTime(); i <= endTime; i += ONE_DAY) {
    data.push(Math.round(Math.random() * 10) + minCost);
  }

  return data;
};

/**
 * Get an array of dates between 2 dates
 */
export const get_array_dates = (start: string, end: string): Array<string> => {
  const dates: Array<string> = [];
  const currentDate = date.extractDate(start, ISO_DATE_MASK);
  const endDate = date.extractDate(end, ISO_DATE_MASK);
  while (currentDate <= endDate) {
    dates.push(date.formatDate(currentDate, FRIENDLY_DATE_MASK));
    currentDate.setTime(+currentDate + ONE_DAY);
  }
  return dates;
};

/**
 * Get total cost for each month
 */
export const test_get_cost_by_month = (): TMonthCost => {
  return {
    January: 120,
    February: 11,
    March: 5,
    April: 123,
    May: 56,
    June: 80,
    July: 112,
    Agost: 190,
    September: 200,
    October: 31,
    November: 47,
    December: 89,
  };
};

/**
 * Sum two numbers
 */
export const sum_two_numbers = (first: number, second: number) =>
  first + second;
