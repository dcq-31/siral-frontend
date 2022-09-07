/*
 * Helpers functions
 */

import { date } from 'quasar';
import { ONE_DAY, FRIENDLY_DATE_MASK, ISO_DATE_MASK } from './constants';

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
