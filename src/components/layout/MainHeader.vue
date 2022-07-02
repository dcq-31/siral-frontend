<template>
  <div>
    <q-header class="bg-primary" elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn
            label="SiRAl-UCLV"
            class="text-body1 text-weight-bold"
            padding="xs sm"
            to="/"
            flat
            unelevated
            no-caps
          />
        </q-toolbar-title>
        <q-btn label="Cuenta" icon="person" to="/account" flat dense no-caps />
      </q-toolbar>

      <q-tabs
        no-caps
        dense
        align="justify"
        indicator-color="white"
        :breakpoint="0"
      >
        <q-route-tab name="reserve" to="/reserve" label="Reserva" />
        <q-route-tab name="statistics" to="/statistics" label="Estadísticas" />
      </q-tabs>
    </q-header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainHeader',
});
</script>
