import { TMonthCost } from 'src/types';
import { COLORS, ONE_DAY } from './constants';

/**
 * Default values for charts configuration
 */
export const CHARTS = {
  TITLE: {
    FONT_SIZE: 19.2,
    FONT_WEIGHT: 500,
    FONT_FAMILY: 'Roboto',
    LINE_HEIGHT: 22.4,
  },
  TEXT: {
    FONT_SIZE: 14,
    FONT_WEIGHT: 400,
    FONT_FAMILY: 'Roboto',
    LINE_HEIGHT: 24,
    COLOR: COLORS.BODY,
  },
  AXIS: {
    COLOR: COLORS.BODY,
  },
};

export const TEXT_STYLE_OPTION = {
  color: CHARTS.TEXT.COLOR,
  fontSize: CHARTS.TEXT.FONT_SIZE,
  fontWeight: CHARTS.TEXT.FONT_WEIGHT,
  fontFamily: CHARTS.TEXT.FONT_FAMILY,
  lineHeight: CHARTS.TEXT.LINE_HEIGHT,
};

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
