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
import { computed } from 'vue';
// v-chart imports
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';

// Types
import { TTotalScheduleData } from 'src/types/types';

// Helpers
import { CHARTS } from 'src/helpers/constants';

use([SVGRenderer, PieChart, TitleComponent, LegendComponent, TooltipComponent]);

const props = defineProps<{
  height?: number;
  width?: number;
  data: TTotalScheduleData;
}>();

const option = computed(() => {
  return {
    // Title
    title: {
      text: 'Porcientos de comidas',
      left: 'center',
      textStyle: {
        color: CHARTS.TEXT.COLOR,
        fontSize: CHARTS.TITLE.FONT_SIZE,
        fontWeight: CHARTS.TITLE.FONT_WEIGHT,
        fontFamily: CHARTS.TITLE.FONT_FAMILY,
        lineHeight: CHARTS.TITLE.LINE_HEIGHT,
      },
    },

    // Tooltip
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
      textStyle: {
        fontSize: CHARTS.TOOLTIP.FONT_SIZE,
        color: CHARTS.TOOLTIP.COLOR,
        fontWeight: CHARTS.TEXT.FONT_WEIGHT,
        fontFamily: CHARTS.TEXT.FONT_FAMILY,
        lineHeight: CHARTS.TEXT.LINE_HEIGHT,
      },
    },

    // Legend
    legend: {
      align: 'left',
      bottom: 'bottom',
      textStyle: {
        color: CHARTS.LEGEND.COLOR,
        fontSize: CHARTS.LEGEND.FONT_SIZE,
        fontWeight: CHARTS.TEXT.FONT_WEIGHT,
        fontFamily: CHARTS.TEXT.FONT_FAMILY,
        lineHeight: CHARTS.TEXT.LINE_HEIGHT,
      },
    },

    // Series
    series: [
      {
        type: 'pie',
        radius: '50%',
        label: {
          fontSize: CHARTS.TEXT.FONT_SIZE,
          color: CHARTS.TEXT.COLOR,
        },
        data: [
          { value: props.data.breakfast, name: 'Desayuno' },
          { value: props.data.lunch, name: 'Almuerzo' },
          { value: props.data.dinner, name: 'Comida' },
        ],
      },
    ],
  };
});
</script>
