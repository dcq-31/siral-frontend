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
import { computed } from 'vue';
// v-chart imports
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';

// Types
import { TMonthCost } from 'src/types/types';

// Helpers
import { MONTHS, CHARTS } from 'src/helpers/constants';

use([SVGRenderer, BarChart, GridComponent, TitleComponent, TooltipComponent]);

const props = defineProps<{
  height?: number;
  width?: number;
  data: TMonthCost;
}>();

const option = computed(() => {
  return {
    animation: false,
    // Title
    title: {
      text: 'Gastos por meses',
      left: 'center',
      textStyle: {
        color: CHARTS.TEXT.COLOR,
        fontSize: CHARTS.TITLE.FONT_SIZE,
        fontWeight: CHARTS.TITLE.FONT_WEIGHT,
        fontFamily: CHARTS.TITLE.FONT_FAMILY,
        lineHeight: CHARTS.TITLE.LINE_HEIGHT,
      },
    },

    // X-axis
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: CHARTS.AXIS.COLOR,
        },
      },
      axisLabel: {
        color: CHARTS.TEXT.COLOR,
        fontSize: CHARTS.AXIS_LABEL.FONT_SIZE,
        fontWeight: CHARTS.TEXT.FONT_WEIGHT,
        fontFamily: CHARTS.TEXT.FONT_FAMILY,
        lineHeight: CHARTS.TEXT.LINE_HEIGHT,
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: CHARTS.AXIS.COLOR,
        },
      },
      data: MONTHS.ES.SHORT,
    },

    // Y-axis
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: CHARTS.AXIS.COLOR,
        },
      },
      axisLabel: {
        color: CHARTS.TEXT.COLOR,
        fontSize: CHARTS.AXIS_LABEL.FONT_SIZE,
        fontWeight: CHARTS.TEXT.FONT_WEIGHT,
        fontFamily: CHARTS.TEXT.FONT_FAMILY,
        lineHeight: CHARTS.TEXT.LINE_HEIGHT,
      },
    },

    // Tooltip
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      textStyle: {
        color: CHARTS.TOOLTIP.COLOR,
        fontSize: CHARTS.TOOLTIP.FONT_SIZE,
        fontWeight: CHARTS.TEXT.FONT_WEIGHT,
        fontFamily: CHARTS.TEXT.FONT_FAMILY,
        lineHeight: CHARTS.TEXT.LINE_HEIGHT,
      },
    },

    // Series
    series: {
      type: 'bar',
      data: [120, 11, 5, 123, 56, 80, 112, 190, 200, 31, 47, 89],
    },
  };
});
</script>
