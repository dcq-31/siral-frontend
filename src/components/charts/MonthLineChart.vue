<template>
  <div>
    <vue-echarts :option="option" style="height: 500px" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueEcharts } from 'vue3-echarts';
// Constants
import { WEEK_DAYS } from 'src/helpers/constants';
// Color utility
import { colors } from 'quasar';

const { getPaletteColor } = colors;

export default defineComponent({
  name: 'MonthLineChart',
  components: {
    VueEcharts,
  },
  setup() {
    const xAxisData = WEEK_DAYS;
    /**
     * TODO: Set to random values, should be read from server *
     */
    const yAxisData = [...Array(7).keys()].map((i) =>
      Math.floor(Math.random() * i * 10 + 1)
    );
    return {
      option: {
        color: getPaletteColor('secondary'),
        tooltip: {
          trigger: 'axis',
        },
        grid: {},
        dataset: {
          source: [
            ['product', ...xAxisData],
            ['Costo', ...yAxisData],
          ],
        },
        xAxis: {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
          },
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            seriesLayoutBy: 'row',
            type: 'line',
          },
        ],
        dataZoom: {
          filterMode: 'filter',
          type: 'inside',
          minSpan: 30,
        },
      },
    };
  },
});
</script>
