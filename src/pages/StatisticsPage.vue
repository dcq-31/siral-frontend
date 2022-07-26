<template>
  <q-page padding>
    <div class="q-py-md">
      <div class="row">
        <div class="col">
          <month-line-chart />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MonthLineChart from 'components/charts/MonthLineChart.vue';

export default defineComponent({
  name: 'StatisticsPage',
  components: {
    MonthLineChart,
  },
});
</script>
