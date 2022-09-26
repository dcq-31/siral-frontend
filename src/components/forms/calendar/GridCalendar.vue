<template>
  <div class="calendar-parent">
    <calendar-view
      :show-date="period"
      :display-period-uom="displayPeriodUOM"
      :weekday-name-format="weekDayNameFormat"
    >
      <!-- Grid Header -->
      <template #header="{ headerProps }">
        <GridCalendarHeader
          v-model="period"
          :next-period="headerProps.nextPeriod"
          :previous-period="headerProps.previousPeriod"
        />
      </template>
      <!-- / Grid Header -->

      <!-- Grid Day Content -->
      <template #dayContent="{ day }">
        <GridCalendarDayContent
          :period="period"
          :day="day"
          :items="reserves.filter(functionItemsOfDay(day))"
      /></template>
      <!-- / Grid Day Content -->
    </calendar-view>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { CalendarView } from 'vue-simple-calendar';
import './../../../../node_modules/vue-simple-calendar/dist/style.css';
import GridCalendarHeader from './GridCalendarHeader.vue';
import GridCalendarDayContent from './GridCalendarDayContent.vue';
import {
  ICalendarItem,
  DateTimeFormatOption,
} from 'vue-simple-calendar/dist/src/ICalendarItem';

const period = ref(new Date());

/**
 * Reserves
 * @description Default reserves
 */
const reserves: Ref<ICalendarItem[]> = ref([
  {
    id: 'event-1',
    title: 'breakfast',
    startDate: new Date(),
  },
  {
    id: 'event-2',
    title: 'lunch',
    startDate: new Date(),
  },
  {
    id: 'event-3',
    title: 'dinner',
    startDate: new Date(),
  },
  {
    id: 'event-4',
    title: 'lunch',
    startDate: new Date(2022, 8, 18),
  },
  {
    id: 'event-5',
    title: 'dinner',
    startDate: new Date(2022, 7, 28),
  },
]);

const weekDayNameFormat: Ref<DateTimeFormatOption> = ref('narrow');
const displayPeriodUOM = ref('month');

/**
 * Function Items of Day
 * @returns function to be passed as callback
 * @param day Day to compare
 */
const functionItemsOfDay = (day: Date) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (item: ICalendarItem, index?: number) =>
    item.startDate.getDate() == day.getDate() &&
    item.startDate.getMonth() == day.getMonth() &&
    item.startDate.getFullYear() == day.getFullYear();
};
</script>
<style lang="scss">
.calendar-parent {
  // recommended calendar parent style
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  // change a default font-size for calendar
  font-size: 0.9rem;
  .cv-header-days > .cv-header-day {
    color: $grey-8;
    font-weight: 600;
    border: none;
  }

  .cv-week {
    // min-height for cells
    min-height: 3.5em;
    .cv-weekdays .cv-day {
      color: $grey-8;
      border: none;

      // handle dates outside the current month
      &.outsideOfMonth {
        visibility: hidden;
      }
      // remove default day number, use the provided slot for that
      .cv-day-number {
        display: none;
      }
    }
  }
}
</style>
