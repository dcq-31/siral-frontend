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
import { TooltipComponent, GridComponent } from 'echarts/components';
import VChart from 'vue-echarts';

// Types
import { TMonthCost } from 'src/types/types';

// Helpers
import { MONTHS, CHARTS } from 'src/helpers/constants';

use([SVGRenderer, BarChart, TooltipComponent, GridComponent]);

const props = defineProps<{
  height?: number;
  width?: number;
  data: TMonthCost;
}>();

const option = computed(() => {
  return {
    animation: false,
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: CHARTS.AXIS.COLOR,
        },
      },
      axisLabel: {
        fontSize: CHARTS.AXIS_LABEL.FONT_SIZE,
        color: CHARTS.TEXT.COLOR,
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: CHARTS.AXIS.COLOR,
        },
      },
      data: MONTHS.ES.SHORT,
    },

    yAxis: {
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
      axisPointer: {
        type: 'shadow',
      },
      textStyle: {
        fontSize: CHARTS.TOOLTIP.FONT_SIZE,
        color: CHARTS.TOOLTIP.COLOR,
      },
    },

    series: {
      type: 'bar',
      data: [120, 11, 5, 123, 56, 80, 112, 190, 200, 31, 47, 89],
    },
  };
});
</script>
