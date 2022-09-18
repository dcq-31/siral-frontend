<template>
  <q-page padding>
    <div class="q-py-md">
      <!-- Title and subtitle -->
      <section class="q-py-md">
        <div class="row justify-center q-gutter-y-sm">
          <div class="col-12 col-sm-8 col-md-6 text-center">
            <div class="text-h2 text-weight-bold text-grey-9 q-mb-md">
              Administra tus reservas
            </div>
            <div class="text-body1 text-grey-7 q-mx-md">
              Tenemos varias ofertas para tí
            </div>
          </div>
        </div>
      </section>
      <!-- / Title and subtitle -->

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
import GridCalendar from 'components/forms/calendar/GridCalendar.vue';
</script>
