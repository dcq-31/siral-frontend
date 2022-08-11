<template>
  <q-page padding>
    <div class="q-pb-md q-pt-xl text-center">
      <section class="q-gutter-y-lg q-pt-sm q-pb-xl">
        <div class="row">
          <div class="col-12 col-sm-4 q-mb-md">
            <q-img src="logo.png" alt="SIRAl logo" width="130px" fit="fill" />
          </div>
          <div class="col-12 col-md-8">
            <div class="text-h4 text-weight-medium text-accent">
              Sistema de Reservación de Alimentación
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <q-btn
              color="primary"
              size="16px"
              label="Menú de hoy"
              padding="sm md"
              unelevated
              no-caps
              class="text-body1"
            />
          </div>
        </div>
      </section>

      <section class="q-py-xl q-px-md bg-blue-1">
        <div class="row">
          <div class="col-12 col-sm-4 q-gutter-y-sm text-center">
            <div class="text-h5 text-weight-medium">
              Planifica tu calendario
            </div>
            <div class="text-body2 q-mb-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              numquam necessitatibus ea quam.
            </div>
            <q-btn
              color="primary"
              label="Calendario"
              padding="sm md"
              unelevated
              no-caps
              class="text-body1"
            />
          </div>
        </div>
      </section>

      <section class="q-px-md q-pt-xl">
        <div class="row q-mb-md">
          <div class="col-12">
            <div class="text-h5 text-center text-weight-medium q-pb-md">
              Ventajas de usar SiRAl
            </div>
          </div>
        </div>

        <div class="row q-gutter-y-xl">
          <div
            v-for="({ title, subtitle, icon }, key) of benefits"
            :key="`home-page-benefit-${key}`"
            class="col-12 col-sm-4"
          >
            <q-card class="text-center" flat>
              <q-card-section class="q-pt-xs q-pb-none">
                <q-avatar
                  :icon="icon.name"
                  font-size="4rem"
                  size="5rem"
                  :text-color="icon.color"
                  class="q-mb-md"
                />
                <div class="text-h6">{{ title }}</div>
              </q-card-section>
              <q-card-section class="q-py-xs">
                <div class="text-body2">
                  {{ subtitle }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </section>
    </div>
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
