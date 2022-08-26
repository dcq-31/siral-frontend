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

// Helpers
import { FRIENDLY_DATE_MASK, MONTHS, CHARTS } from 'src/helpers/constants';
import { get_array_dates } from 'src/helpers/functions';

// Types
import { IRangeData } from 'src/types/types';

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
  data: IRangeData;
}>();

const option = computed(() => {
  return {
    animation: false,
    xAxis: {
      name: 'Fecha',
      nameLocation: 'center',
      nameTextStyle: {
        fontSize: CHARTS.TEXT.FONT_SIZE,
        color: CHARTS.TEXT.COLOR,
      },
      nameGap: 25,
      type: 'category',
      boundaryGap: false,
      data: get_array_dates(props.data.range.from, props.data.range.to),
      axisLine: {
        lineStyle: {
          color: CHARTS.AXIS.COLOR,
        },
      },
      axisLabel: {
        fontSize: CHARTS.AXIS_LABEL.FONT_SIZE,
        color: CHARTS.TEXT.COLOR,
        formatter: (value: string) => {
          const currentDate = date.extractDate(value, FRIENDLY_DATE_MASK);
          if (currentDate.getDate() == 1 && currentDate.getMonth() == 0) {
            return currentDate.getFullYear().toString();
          } else if (currentDate.getDate() == 1) {
            return MONTHS.ES.SHORT[currentDate.getMonth()];
          } else {
            return currentDate.getDate().toString();
          }
        },
      },
      axisTick: {
        lineStyle: {
          color: CHARTS.AXIS.COLOR,
        },
      },
    },
    yAxis: {
      name: 'Gastos',
      nameTextStyle: {
        fontSize: CHARTS.TEXT.FONT_SIZE,
        color: CHARTS.TEXT.COLOR,
      },
      type: 'value',
      axisLine: {
        lineStyle: {
          color: CHARTS.AXIS.COLOR,
        },
      },
      axisLabel: {
        fontSize: CHARTS.AXIS_LABEL.FONT_SIZE,
        color: CHARTS.TEXT.COLOR,
      },
    },
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontSize: CHARTS.TOOLTIP.FONT_SIZE,
        color: CHARTS.TOOLTIP.COLOR,
      },
    },
    legend: {
      left: 'center',
      textStyle: {
        fontSize: CHARTS.LEGEND.FONT_SIZE,
        color: CHARTS.LEGEND.COLOR,
      },
    },
    dataZoom: [
      {
        type: 'inside',
        minValueSpan: 4,
        maxValueSpan: 4,
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
        symbolSize: 5,
      },
      {
        name: 'Almuerzo',
        data: props.data.values.lunch,
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
      },
      {
        name: 'Comida',
        data: props.data.values.dinner,
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
      },
    ],
  };
});
</script>
