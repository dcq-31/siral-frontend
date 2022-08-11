<template>
  <v-chart
    :option="option"
    :init-options="{
      width: width,
      height: height,
    }"
    autoresize
  />
</template>

<script setup lang="ts">
/**
 * TODO: Later add types for charts, read documentation for @types/echarts
 */
/**
 * TODO: Create a xAxis of type: category
 * TODO: Generate a array of dates, from startDate to endDate
 */
import { computed } from 'vue';
import { date } from 'quasar';
// v-chart imports
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import {
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';

import { FRIENDLY_DATE_MASK, MONTHS_SHORT_NAME } from 'src/helpers/constants';
import { get_array_dates } from 'src/helpers/functions';
// Types
import { ILineChartData } from 'src/types/types';

use([
  SVGRenderer,
  LineChart,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  LegendComponent,
]);

const props = defineProps<{
  height?: number;
  width?: number;
  data: ILineChartData;
}>();

const option = computed(() => {
  return {
    animation: false,
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: get_array_dates(props.data.range.from, props.data.range.to),
      axisLabel: {
        formatter: (value: string) => {
          const currentDate = date.extractDate(value, FRIENDLY_DATE_MASK);
          if (currentDate.getDate() == 1 && currentDate.getMonth() == 0) {
            return currentDate.getFullYear().toString();
          } else if (currentDate.getDate() == 1) {
            return MONTHS_SHORT_NAME[currentDate.getMonth()];
          } else {
            return currentDate.getDate().toString();
          }
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} $',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      bottom: 10,
      left: 'center',
    },
    dataZoom: [
      {
        type: 'inside',
        minValueSpan: 5,
        maxValueSpan: 5,
      },
    ],
    /**
     * TODO: Reduce code
     */
    series: [
      {
        name: 'Desayuno',
        data: props.data.values.breakfast,
        type: 'line',
        symbol: 'circle',
      },
      {
        name: 'Almuerzo',
        data: props.data.values.lunch,
        type: 'line',
        symbol: 'circle',
      },
      {
        name: 'Comida',
        data: props.data.values.dinner,
        type: 'line',
        symbol: 'circle',
      },
    ],
  };
});
</script>
