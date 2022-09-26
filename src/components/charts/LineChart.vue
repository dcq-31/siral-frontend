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
 * TODO: Better chart configurations
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
import {
  FRIENDLY_DATE_MASK,
  MONTHS,
  CHARTS,
  TEXT_STYLE_OPTION,
  get_array_dates,
} from 'src/helpers';

// Types
import { IRangeData } from 'src/types';

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
    // Grid
    grid: {
      bottom: 100,
    },

    // X-axis
    xAxis: {
      name: 'Fecha',
      nameLocation: 'center',
      nameTextStyle: TEXT_STYLE_OPTION,
      nameGap: 30,
      type: 'category',
      boundaryGap: false,
      data:
        props.data.range.from !== null && props.data.range.to !== null
          ? get_array_dates(props.data.range.from, props.data.range.to)
          : [],
      axisLine: {
        lineStyle: {
          color: CHARTS.AXIS.COLOR,
        },
      },
      axisLabel: {
        color: CHARTS.TEXT.COLOR,
        fontSize: CHARTS.TEXT.FONT_SIZE,
        fontWeight: CHARTS.TEXT.FONT_WEIGHT,
        fontFamily: CHARTS.TEXT.FONT_FAMILY,
        lineHeight: CHARTS.TEXT.LINE_HEIGHT,
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

    // Y-axis
    yAxis: {
      name: 'Gastos',
      nameTextStyle: TEXT_STYLE_OPTION,
      type: 'value',
      axisLine: {
        lineStyle: {
          color: CHARTS.AXIS.COLOR,
        },
      },
      axisLabel: TEXT_STYLE_OPTION,
    },

    // Tooltip
    tooltip: {
      trigger: 'axis',
      textStyle: TEXT_STYLE_OPTION,
    },

    // Legend
    legend: {
      align: 'left',
      itemHeight: 16,
      bottom: 'bottom',
      lineStyle: {
        width: 3,
      },
      textStyle: TEXT_STYLE_OPTION,
    },

    // Data-Zoom
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
    // Series
    series: [
      {
        name: 'Desayuno',
        data: props.data.values.breakfast,
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: {
          width: 3,
        },
      },
      {
        name: 'Almuerzo',
        data: props.data.values.lunch,
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: {
          width: 3,
        },
      },
      {
        name: 'Comida',
        data: props.data.values.dinner,
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: {
          width: 3,
        },
      },
    ],
  };
});
</script>
