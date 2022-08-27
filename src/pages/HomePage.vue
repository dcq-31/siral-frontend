<template>
  <q-page padding>
    <!-- Banner -->
    <section class="text-center">
      <div class="row">
        <div class="col-10 col-md-7 col-xl-8 q-mx-auto q-gutter-y-lg">
          <q-img src="logo.png" alt="SIRAl logo" width="145px" fit="fill" />
          <div class="text-h4 text-weight-bold text-gradient-primary">
            Sistema de Reservación de Alimentación
          </div>

          <div>
            <q-btn
              color="primary"
              label="Menú de hoy"
              padding="10px lg"
              :ripple="false"
              unelevated
              no-caps
              class="text-body2 text-weight-medium q-mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- / Banner -->

    <!-- Plan your calendar -->
    <section class="text-center bg-blue-1">
      <div class="row">
        <div class="col-10 col-sm-8 col-md-7 q-mx-auto">
          <div class="text-h6 text-weight-medium q-mb-sm">
            Planifica tu calendario
          </div>

          <div class="text-body2 q-mb-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam
            necessitatibus ea quam.
          </div>

          <q-btn
            color="primary"
            label="Calendario"
            padding="sm md"
            :ripple="false"
            unelevated
            no-caps
            class="text-body2 text-weight-medium"
          />
        </div>
      </div>
    </section>
    <!-- / Plan your calendar -->

    <!-- Adventages of use SiRAl -->
    <section class="q-px-md">
      <div class="row q-mb-lg">
        <div class="col-12">
          <div class="text-h6 text-center text-weight-medium">
            Ventajas de usar SiRAl
          </div>
        </div>
      </div>

      <div class="row q-gutter-y-lg">
        <div
          v-for="({ title, subtitle, icon }, key) of benefits"
          :key="`home-page-benefit-${key}`"
          class="col-12 col-sm-6 col-md-4"
        >
          <q-card class="text-center" flat>
            <q-card-section class="q-py-sm">
              <q-avatar
                :icon="icon.name"
                font-size="4rem"
                size="5rem"
                :text-color="icon.color"
                class="q-mb-md"
              />
              <div class="text-body1 text-weight-medium">{{ title }}</div>
            </q-card-section>
            <q-card-section class="q-py-none">
              <div class="text-body2">
                {{ subtitle }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <!-- / Adventages of use SiRAl -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const benefits = [
      {
        title: 'Mejor Seguridad',
        subtitle:
          '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est voluptate porro ad asperiores.',
        icon: {
          name: 'security_update_good',
          color: 'primary',
        },
      },
      {
        title: 'Disponibilidad',
        subtitle:
          '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est voluptate porro ad asperiores.',
        icon: {
          name: 'wifi',
          color: 'secondary',
        },
      },
      {
        title: 'Vinculado a tu cuenta',
        subtitle:
          '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est voluptate porro ad asperiores.',
        icon: {
          name: 'manage_accounts',
          color: 'accent',
        },
      },
    ];

    return { benefits };
  },
});
</script>
