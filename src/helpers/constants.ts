/*
 * Useful constants
 */
import { date } from 'quasar';
import { IDateRange } from 'src/types/types';

/**
 * Global colors
 */
export const COLORS = {
  BODY: '#262626',
};

/**
 * Day Schedule
 */
export const DAY_SCHEDULE = ['breakfast', 'lunch', 'dinner'];

/**
 * Month in different languages/versions
 */
export const MONTHS = {
  ES: {
    SHORT: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    FULL: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
  },
  ENG: {
    SHORT: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    FULL: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Agost',
      'September',
      'October',
      'November',
      'December',
    ],
  },
};

/*
 * Date
 */
export const ISO_DATE_MASK = 'YYYY-MM-DD';
export const FRIENDLY_DATE_MASK = 'DD-MM-YYYY';
export const ONE_DAY = 24 * 3600 * 1000;
export const INITIAL_DATE_RANGE: IDateRange = {
  from: date.formatDate(
    date.subtractFromDate(new Date(), { days: 7 }),
    ISO_DATE_MASK
  ),
  to: date.formatDate(new Date(), ISO_DATE_MASK),
};
