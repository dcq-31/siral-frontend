<template>
  <q-page>
    <div class="q-pt-xl q-pb-lg">
      <div class="q-pa-md q-gutter-sm text-center">
        <div class="row q-gutter-y-md q-mb-lg">
          <div class="col-12 col-sm-4">
            <q-img src="logo.png" alt="SIRAl logo" width="140px" fit="fill" />
          </div>
          <div class="col-12 col-md-8">
            <div class="text-h4 text-weight-light">
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
      </div>

      <div class="q-pa-lg q-py-md q-mb-md bg-blue-1">
        <div class="row q-gutter-y-sm q-mb-md">
          <div class="col-12 col-sm-4 text-center">
            <div class="text-h5 q-pb-sm">Planifica tu calendario</div>
            <div class="q-pb-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              numquam necessitatibus ea quam.
            </div>
            <q-btn
              color="primary"
              label="Calendario"
              padding="sm md"
              rounded
              unelevated
              no-caps
            />
          </div>
        </div>
      </div>

      <div class="q-pa-md q-py-lg">
        <div class="row">
          <div class="col-12">
            <div class="text-h5 text-center q-pb-md">
              Ventajas de usar SiRAl
            </div>
          </div>
        </div>

        <div class="row q-gutter-y-lg">
          <div class="col-12 col-sm-4">
            <q-card class="text-center" flat>
              <q-card-section class="q-pt-sm q-pb-sm">
                <q-avatar
                  icon="security_update_good"
                  font-size="5rem"
                  size="6rem"
                  text-color="primary"
                  class="q-mb-sm"
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
              <q-card-section class="q-pt-sm q-pb-sm">
                <q-avatar
                  icon="wifi"
                  font-size="5rem"
                  size="6rem"
                  text-color="primary"
                  class="q-mb-sm"
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
              <q-card-section class="q-pt-sm q-pb-sm">
                <q-avatar
                  icon="person"
                  font-size="5rem"
                  size="6rem"
                  text-color="primary"
                  class="q-mb-sm"
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
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
});
</script>
