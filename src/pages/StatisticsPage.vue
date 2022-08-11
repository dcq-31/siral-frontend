<template>
  <q-page padding>
    <div class="q-py-md">
      <!-- Introduction header & date input -->
      <section>
        <div class="row q-gutter-y-md">
          <div class="col-12">
            <div class="text-h4 text-center text-weight-medium text-accent">
              Estadísticas
            </div>
          </div>
          <div class="col-12 col-md-6 text-center q-px-md">
            Seleccione un rango de fechas para representar mediante gráficos los
            gastos de reservas en los días indicados.
          </div>
          <div class="col-12 col-md-6 text-center">
            <q-date
              v-model="modelDate"
              color="primary"
              :mask="ISO_DATE_MASK"
              minimal
              range
              no-unset
              bordered
              class="shadow-3"
            >
              <div class="row justify-end q-gutter-sm">
                <q-btn
                  label="Mostrar gráficas"
                  color="primary"
                  padding="xs sm"
                  @click="updateRange"
                  no-caps
                  unelevated
                  class="full-width"
                />
              </div>
            </q-date>
          </div>
        </div>
      </section>

      <!-- Charts -->
      <section class="q-py-md">
        <div class="row">
          <div class="col-12">
            <LineChart :height="400" :data="data" />
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
/**
 * TODO: Limit user selection to certain times in the calendar input
 * TODO: For now values are set to constants values, real data must be read from the server
 */
import { ref, computed, Ref } from 'vue';
import { date } from 'quasar';
import { test_get_charts_data } from 'src/helpers/functions';
import { ISO_DATE_MASK } from 'src/helpers/constants';

// Types
import { TDayScheduleData, IDateRange, ILineChartData } from 'src/types/types';

// Components
import LineChart from 'components/charts/LineChart.vue';

/**
 * Initial model range of dates, 7 days ago until now
 */
const modelDate: Ref<string | IDateRange> = ref({
  from: date.formatDate(
    date.subtractFromDate(new Date(), { days: 7 }),
    ISO_DATE_MASK
  ),
  to: date.formatDate(new Date(), ISO_DATE_MASK),
});

/**
 * Computed Properties
 */
const compModelDate = computed<IDateRange>(() =>
  typeof modelDate.value === 'string'
    ? { from: modelDate.value, to: modelDate.value }
    : { from: modelDate.value.from, to: modelDate.value.to }
);

/**
 * Methods
 */
const getChartData = (dateStart: string, dateEnd: string): TDayScheduleData => {
  /**
   * TODO: Make request to get data for the specified range
   */
  return {
    breakfast: test_get_charts_data(dateStart, dateEnd),
    lunch: test_get_charts_data(dateStart, dateEnd),
    dinner: test_get_charts_data(dateStart, dateEnd),
  };
};

const updateRange = () => {
  data.value = {
    range: compModelDate.value,
    values: getChartData(compModelDate.value.from, compModelDate.value.to),
  };
};
const data: Ref<ILineChartData> = ref({
  range: compModelDate.value,
  values: getChartData(compModelDate.value.from, compModelDate.value.to),
});
</script>

<!--
  SCSS Styles
-->
<style lang="scss">
.q-date__view,
.q-date__calendar-days-container {
  min-height: auto;

  .q-date__range:before,
  .q-date__range-from:before,
  .q-date__range-to:before {
    opacity: 0.5;
  }
}

.q-date__view {
  padding: 10px;
  padding-bottom: 16px;
}
</style>
