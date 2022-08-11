<template>
  <q-header elevated class="bg-white text-dark">
    <q-toolbar>
      <q-btn flat round dense icon="menu" class="q-mr-sm" @click="toggleMenu" />
      <q-toolbar-title class="text-center">
        <q-btn
          label="SiRAl-UCLV"
          padding="xs sm"
          to="/"
          flat
          unelevated
          no-caps
          class="text-body1 text-weight-bold"
        />
      </q-toolbar-title>
      <q-btn flat round dense icon="more_vert" />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainHeader',
  emits: ['toggle:drawerState'],
  setup(props, context) {
    const toggleMenu = () => context.emit('toggle:drawerState');
    return { toggleMenu };
  },
});
</script>
