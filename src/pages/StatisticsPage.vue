<template>
  <q-page padding>
    <div class="q-py-md">
      <!-- Title and subtitle -->
      <section class="q-py-md">
        <div class="row justify-center q-gutter-y-sm">
          <div class="col-12 col-sm-8 col-md-6 text-center">
            <div class="text-h5 text-weight-medium q-mb-md">Estadísticas</div>
            <div class="text-body2 text-grey-7 q-mx-md">
              Resumen de sus gastos de reservas en SiRAl-UCLV.
            </div>
          </div>
        </div>
      </section>
      <!-- / Title and subtitle -->

      <!-- Date input -->
      <section class="q-py-md">
        <div class="row justify-center text-center">
          <div class="col-12 col-sm-10 col-md-8 text-body2">
            <p class="q-mb-md">
              Elige el rango de fechas para mostrar en gráficas y tablas los
              gastos en reservas de desayunos, almuerzos y comidas.
            </p>
            <div>
              <q-btn
                color="primary"
                label="Editar calendario"
                padding="sm md"
                size="16px"
                no-caps
                unelevated
                class="text-body2 text-weight-medium q-mx-auto"
              >
                <q-popup-proxy cover transition-duration="300">
                  <InputDateRange v-model="modelDate" buttons-close-popup />
                </q-popup-proxy>
              </q-btn>
            </div>
          </div>
        </div>
      </section>
      <!-- / Date input -->

      <!-- Table and Graphics -->
      <section class="q-py-lg">
        <div class="row">
          <div class="col-12 col-sm-10 q-mx-auto">
            <q-card flat bordered class="q-mb-lg">
              <q-card-section
                class="bg-grey-2 text-body2 text-weight-medium q-py-sm card-header"
              >
                Registro de Reservas
              </q-card-section>
              <q-card-section class="q-py-sm">
                <StatisticsTable :data="data" :max-height="400" />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-sm-10 col-md-5 q-mx-auto">
            <div class="q-mb-lg">
              <q-card flat bordered class="q-mb-lg">
                <q-card-section
                  class="bg-grey-2 text-body2 text-weight-medium q-py-sm card-header"
                >
                  Gastos por día
                </q-card-section>
                <q-card-section class="q-py-sm">
                  <LineChart :height="450" :data="data" />
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="col-12 col-sm-10 col-md-6 q-mx-auto">
            <q-card flat bordered class="q-mb-lg">
              <q-card-section
                class="bg-grey-2 text-body2 text-weight-medium q-py-sm card-header"
              >
                Porcientos de Reservas
              </q-card-section>
              <q-card-section class="q-py-sm">
                <PieChart :height="320" :data="pieChartData" />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-sm-10 col-md-6 q-mx-auto">
            <q-card flat bordered class="q-mb-lg">
              <q-card-section
                class="bg-grey-2 text-body2 text-weight-medium q-py-sm card-header"
              >
                Gastos por Mes
              </q-card-section>
              <q-card-section class="q-py-sm">
                <BarChart :height="400" :data="barChartData" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </section>
      <!-- / Table and Graphics -->
    </div>
  </q-page>
</template>

<script setup lang="ts">
/**
 * TODO: For now values are set to constants values, real data must be read from the server
 */
import { ref, Ref, computed } from 'vue';
import { IDateRange, TTotalScheduleData } from 'src/types';

import InputDateRange from 'components/forms/InputDateRange.vue';
import LineChart from 'components/charts/LineChart.vue';
import PieChart from 'components/charts/PieChart.vue';
import BarChart from 'components/charts/BarChart.vue';
import StatisticsTable from 'components/StatisticsTable.vue';

import { INITIAL_DATE_RANGE, test_get_cost_by_month } from 'src/helpers';
import { getChartData } from 'src/services';

/**
 * Sum two numbers
 */
const sum_two_numbers = (first: number, second: number) => first + second;

/**
 * Model for date input
 * Initial value 7 days ago until now
 */
const modelDate: Ref<IDateRange> = ref(INITIAL_DATE_RANGE);
const barChartData = test_get_cost_by_month();

const data = computed(() => {
  return {
    range: modelDate.value,
    values: getChartData(modelDate.value.from, modelDate.value.to),
  };
});

const pieChartData = computed<TTotalScheduleData>(() => {
  return {
    breakfast: data.value.values.breakfast.reduce(sum_two_numbers),
    lunch: data.value.values.lunch.reduce(sum_two_numbers),
    dinner: data.value.values.dinner.reduce(sum_two_numbers),
  };
});
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

.q-card .card-header {
  border-bottom: solid 1px $separator-color;
}
</style>
