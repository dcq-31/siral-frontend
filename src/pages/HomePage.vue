<template>
  <q-page>
    <div class="q-py-md text-center">
      <section class="q-gutter-y-lg q-pt-sm q-pb-xl">
        <div class="row">
          <div class="col-12 col-sm-4 q-mb-md">
            <q-img src="logo.png" alt="SIRAl logo" width="135px" fit="fill" />
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
              rounded
              unelevated
              no-caps
            />
          </div>
        </div>
      </section>

      <section class="q-py-xl bg-blue-1">
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
              size="14px"
              label="Calendario"
              padding="sm md"
              rounded
              unelevated
              no-caps
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
          <div class="col-12 col-sm-4">
            <q-card class="text-center" flat>
              <q-card-section class="q-pt-xs q-pb-none">
                <q-avatar
                  icon="security_update_good"
                  font-size="4rem"
                  size="5rem"
                  text-color="primary"
                  class="q-mb-md"
                />
                <div class="text-h6">Mejor Seguridad</div>
              </q-card-section>
              <q-card-section class="q-py-xs">
                <div class="text-body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem est voluptate porro ad asperiores.
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-sm-4">
            <q-card class="text-center" flat>
              <q-card-section class="q-pt-xs q-pb-none">
                <q-avatar
                  icon="wifi"
                  font-size="4rem"
                  size="5rem"
                  text-color="secondary"
                  class="q-mb-md"
                />
                <div class="text-h6">Disponibilidad</div>
              </q-card-section>
              <q-card-section class="q-py-xs">
                <div class="text-body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem est voluptate porro ad asperiores.
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-sm-4">
            <q-card class="text-center" flat>
              <q-card-section class="q-pt-xs q-pb-none">
                <q-avatar
                  icon="person"
                  font-size="4rem"
                  size="5rem"
                  text-color="blue-grey-8"
                  class="q-mb-md"
                />
                <div class="text-h6">Vinculado a tu cuenta</div>
              </q-card-section>
              <q-card-section class="q-py-xs">
                <div class="text-body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem est voluptate porro ad asperiores.
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
});
</script>
