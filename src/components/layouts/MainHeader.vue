<template>
  <q-header bordered class="bg-grey-1 text-dark">
    <q-toolbar>
      <q-btn
        icon="menu"
        :ripple="false"
        flat
        round
        dense
        @click="openDrawer"
        class="q-mr-sm"
      />

      <q-toolbar-title class="text-center">
        <q-btn
          label="Aplicación de Reservación"
          padding="xs sm"
          :to="{ name: ROUTES.HOME }"
          :ripple="false"
          flat
          unelevated
          no-caps
          class="text-body2 text-weight-bold"
        />
      </q-toolbar-title>

      <q-btn icon="more_vert" :ripple="false" flat round dense>
        <q-menu>
          <q-list>
            <q-item
              v-for="index in 3"
              :key="`main-header-dropdown-item-${index}`"
              clickable
              v-close-popup
            >
              <q-item-section>
                <q-item-label>Opción {{ index }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ROUTES } from 'src/router/names';

const emits = defineEmits<{
  (e: 'update:drawerState', value: boolean): void;
}>();

const openDrawer = () => emits('update:drawerState', true);
</script>
