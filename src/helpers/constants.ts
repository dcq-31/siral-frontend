/*
 * Useful constants
 */
import { date } from 'quasar';
import { IDateRange, IFullDayOffer } from 'src/types';

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

/*
 * Offer
 */

export const INITIAL_LIST_DAY_OFFERS: IFullDayOffer[] = [
  {
    // ? First Day Offer
    date: '25/08/2022',
    breakfast: {
      date: '25/08/2022',
      products: [
        {
          title: 'Arroz',
          price: 2.4,
        },
        {
          title: 'Huevo',
          price: 3,
        },
        {
          title: 'Chicharos',
          price: 4,
        },
      ],
      total_cost: 9.4,
      type: 'breakfast',
    },
    dinner: {
      date: '25/08/2022',
      products: [
        {
          title: 'Arroz Amarrillo',
          price: 3,
        },
        {
          title: 'Picadillo de Pollo',
          price: 4,
        },
        {
          title: 'Chicharos',
          price: 4,
        },
      ],
      total_cost: 11,
      type: 'dinner',
    },
    lunck: {
      date: '25/08/2022',
      products: [
        {
          title: 'Arroz',
          price: 2.4,
        },
        {
          title: 'Chicharos',
          price: 4,
        },
      ],
      total_cost: 6.4,
      type: 'lunch',
    },
  },

  {
    // ? Second Day Offer
    date: '26/08/2022',
    breakfast: {
      date: '26/08/2022',
      products: [
        {
          title: 'Arroz',
          price: 2.4,
        },
        {
          title: 'Arina',
          price: 2,
        },
        {
          title: 'Chicharos',
          price: 4,
        },
      ],
      total_cost: 8.4,
      type: 'breakfast',
    },
    dinner: {
      date: '26/08/2022',
      products: [
        {
          title: 'Arroz Blanco',
          price: 3,
        },
        {
          title: 'Puré de Malanga',
          price: 3,
        },
        {
          title: 'Chicharos',
          price: 4,
        },
      ],
      total_cost: 10,
      type: 'dinner',
    },
    lunck: {
      date: '26/08/2022',
      products: [
        {
          title: 'Arroz',
          price: 2.4,
        },
        {
          title: 'Frijoles negros',
          price: 5,
        },
      ],
      total_cost: 7.4,
      type: 'lunch',
    },
  },
];
