<template>
  <q-header bordered class="bg-grey-1 text-dark">
    <q-toolbar>
      <q-btn
        icon="menu"
        :ripple="false"
        flat
        round
        dense
        @click="toggleMenu"
        class="q-mr-sm"
      />
      <q-toolbar-title class="text-center">
        <q-btn
          label="SiRAl-UCLV"
          padding="xs sm"
          to="/"
          :ripple="false"
          flat
          unelevated
          no-caps
          class="text-body2 text-weight-bold"
        />
      </q-toolbar-title>
      <q-btn icon="more_vert" :ripple="false" flat round dense />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emits = defineEmits<{
  (e: 'toggle:drawerState'): void;
}>();

const toggleMenu = () => emits('toggle:drawerState');
</script>
