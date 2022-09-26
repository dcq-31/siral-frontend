<template>
  <q-page padding>
    <div class="q-py-md">
      <!-- Title and subtitle -->
      <section class="q-py-md">
        <div class="q-pa-sm">
          <div class="row q-gutter-y-sm">
            <div class="col-12 col-md-8 q-mx-auto text-center">
              <div class="text-h2 text-grey-9 text-weight-bold q-mb-md">
                Administra tus reservas
              </div>
              <div class="text-body2 text-weight-light q-mx-md">
                Revisa las ofertas que tenemos para tí y elige el día que
                quieras reservar
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- / Title and subtitle -->

      <!-- Range Reservation  -->
      <section class="q-py-md q-px-sm">
        <div class="row">
          <div class="col-12 col-md-8 q-mx-auto text-center q-mb-md">
            <div class="text-body1 text-grey-9 text-weight-medium q-mb-sm">
              Reserva de forma rápida
            </div>
            <p>
              Selecciona un rango de fechas (Desde/Hasta) para reservar en todos
              los días ubicados en ese intervalo.
            </p>
            <ReserveQuickRange :day-offers="dayOffers" @submit="reserve" />
          </div>
        </div>
      </section>
      <!-- / Range Reservation  -->

      <!-- Calendar grid -->
      <section class="q-py-md">
        <q-card flat bordered>
          <q-card-section class="no-padding q-pt-sm">
            <GridCalendar />
          </q-card-section>
        </q-card>
      </section>
      <!-- / Calendar grid -->
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { IFullDayOffer, IOffer } from 'src/types';
import { INITIAL_LIST_DAY_OFFERS } from 'src/helpers';
import GridCalendar from 'components/forms/calendar/GridCalendar.vue';
import ReserveQuickRange from 'components/forms/ReserveQuickRange.vue';

const userReserves: Ref<(IFullDayOffer | IOffer)[]> = ref([]);
const dayOffers: IFullDayOffer[] = INITIAL_LIST_DAY_OFFERS;

const reserve = (_offers: (IFullDayOffer | IOffer)[]) => {
  console.log('Items reserved: ', _offers);
};
</script>
