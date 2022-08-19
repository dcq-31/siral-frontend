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
import { TooltipComponent, LegendComponent } from 'echarts/components';
import VChart from 'vue-echarts';

// Types
import { TTotalScheduleData } from 'src/types/types';

// Helpers
import { CHARTS } from 'src/helpers/constants';

use([SVGRenderer, PieChart, TooltipComponent, LegendComponent]);

const props = defineProps<{
  height?: number;
  width?: number;
  data: TTotalScheduleData;
}>();

const option = computed(() => {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
      textStyle: {
        fontSize: CHARTS.TOOLTIP.FONT_SIZE,
        color: CHARTS.TOOLTIP.COLOR,
      },
    },
    legend: {
      left: 'center',
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
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
