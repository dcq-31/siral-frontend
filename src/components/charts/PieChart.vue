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
import { LegendComponent, TooltipComponent } from 'echarts/components';
import VChart from 'vue-echarts';

// Types
import { TTotalScheduleData } from 'src/types';

// Helpers
import { CHARTS, TEXT_STYLE_OPTION } from 'src/helpers';

use([SVGRenderer, PieChart, LegendComponent, TooltipComponent]);

const props = defineProps<{
  height?: number;
  width?: number;
  data: TTotalScheduleData;
}>();

const option = computed(() => {
  return {
    // Tooltip
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
      textStyle: TEXT_STYLE_OPTION,
    },

    // Legend
    legend: {
      align: 'left',
      top: '25px',
      textStyle: TEXT_STYLE_OPTION,
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
