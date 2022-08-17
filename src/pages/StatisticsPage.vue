<template>
  <q-page padding>
    <div class="q-py-md">
      <!-- Title and subtitle -->
      <section class="q-py-sm text-center">
        <div class="row q-gutter-y-sm">
          <div class="col-12">
            <div class="text-h4 text-dark text-weight-medium">Estadísticas</div>
          </div>
          <div class="col-12">
            <div class="text-body1 text-grey-9">
              Resumen de sus gastos de reservas en SiRAl-UCLV.
            </div>
          </div>
        </div>
      </section>

      <!-- Date input -->
      <section class="q-py-md q-px-sm">
        <div class="row q-gutter-y-md">
          <div class="col-12 col-md-6 text-body1">
            Elige el rango de fechas para mostrar en gráficas y tablas los
            gastos en reservas de desayunos, almuerzos y comidas.
            <div class="q-my-md text-center">
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

      <!--Data show -->
      <section class="q-py-md">
        <div class="row q-gutter-y-lg">
          <div class="col-12">
            <StatisticsTable :data="data" />
          </div>
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
 * TODO: For now values are set to constants values, real data must be read from the server
 */
import { ref, Ref, computed } from 'vue';
import { INITIAL_DATE_RANGE } from 'src/helpers/constants';
import { IDateRange } from 'src/types/types';

// Components
import InputDateRange from 'components/forms/InputDateRange.vue';
import LineChart from 'components/charts/LineChart.vue';
import StatisticsTable from 'components/StatisticsTable.vue';

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
