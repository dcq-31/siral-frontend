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
import { GridComponent, TooltipComponent } from 'echarts/components';
import VChart from 'vue-echarts';

// Types
import { TMonthCost } from 'src/types';

// Helpers
import { MONTHS, CHARTS, TEXT_STYLE_OPTION } from 'src/helpers';

use([SVGRenderer, BarChart, GridComponent, TooltipComponent]);

const props = defineProps<{
  height?: number;
  width?: number;
  data: TMonthCost;
}>();

const option = computed(() => {
  return {
    animation: false,

    // X-axis
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: CHARTS.AXIS.COLOR,
        },
      },
      axisLabel: TEXT_STYLE_OPTION,
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
      axisLabel: TEXT_STYLE_OPTION,
    },

    // Tooltip
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      textStyle: TEXT_STYLE_OPTION,
    },

    // Series
    series: {
      type: 'bar',
      data: [120, 11, 5, 123, 56, 80, 112, 190, 200, 31, 47, 89],
    },
  };
});
</script>
