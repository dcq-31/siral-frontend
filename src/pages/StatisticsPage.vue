<template>
  <q-page padding>
    <div class="q-py-md">
      <!-- Title and subtitle -->
      <section class="q-py-md text-center">
        <div class="row q-gutter-y-sm">
          <div class="col-12">
            <div class="text-h4 text-dark text-weight-medium">Estadísticas</div>
          </div>
          <div class="col-12">
            <div class="text-body1 text-grey-9 q-mx-md">
              Resumen de sus gastos de reservas en SiRAl-UCLV.
            </div>
          </div>
        </div>
      </section>

      <!-- Date input -->
      <section class="q-py-md text-center">
        <div class="row">
          <div class="col-12 col-md-6 text-body1">
            Elige el rango de fechas para mostrar en gráficas y tablas los
            gastos en reservas de desayunos, almuerzos y comidas.
            <div class="q-mt-md">
              <q-btn
                color="primary"
                label="Editar calendario"
                padding="sm md"
                size="16px"
                no-caps
                unelevated
                class="q-mx-auto"
              >
                <q-popup-proxy cover transition-duration="300">
                  <InputDateRange v-model="modelDate" buttons-close-popup />
                </q-popup-proxy>
              </q-btn>
            </div>
          </div>
        </div>
      </section>

      <!-- Table and Graphics -->
      <section class="q-py-md">
        <div class="row q-mb-md">
          <div class="col-12">
            <div
              class="text-h5 text-dark text-weight-medium text-center q-px-md"
            >
              Tabla, gráfico de líneas y gráfico de pastel
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <StatisticsTable :data="data" :max-height="400" class="q-mb-xl" />
          </div>
          <div class="col-12">
            <LineChart :height="400" :data="data" class="q-mb-lg" />
          </div>
          <div class="col-12">
            <PieChart :height="300" :data="pieChartData" />
          </div>
          <div class="col-12">
            <BarChart :height="400" :data="barChartData" />
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
/**
 * TODO: For now values are set to constants values, real data must be read from the server
 */
import { ref, Ref, computed } from 'vue';
import { INITIAL_DATE_RANGE } from 'src/helpers/constants';
import { IDateRange, TTotalScheduleData } from 'src/types/types';

// Components
import InputDateRange from 'components/forms/InputDateRange.vue';
import LineChart from 'components/charts/LineChart.vue';
import PieChart from 'components/charts/PieChart.vue';
import BarChart from 'components/charts/BarChart.vue';
import StatisticsTable from 'components/StatisticsTable.vue';

// Helpers
import { sum_two_numbers, test_get_cost_by_month } from 'src/helpers/functions';

// Services
import { getChartData } from 'src/services/test';

/**
 * Model for date input
 * Initial value 7 days ago until now
 */
const modelDate: Ref<IDateRange> = ref(INITIAL_DATE_RANGE);

/**
 * Data used by charts
 */
const data = computed(() => {
  return {
    range: modelDate.value,
    values: getChartData(modelDate.value.from, modelDate.value.to),
  };
});

/**
 *
 */
const pieChartData = computed<TTotalScheduleData>(() => {
  return {
    breakfast: data.value.values.breakfast.reduce(sum_two_numbers),
    lunch: data.value.values.lunch.reduce(sum_two_numbers),
    dinner: data.value.values.dinner.reduce(sum_two_numbers),
  };
});

const barChartData = test_get_cost_by_month();
</script>

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
