<template>
  <q-header>
    <q-toolbar class="bg-primary">
      <q-btn
        flat
        round
        dense
        icon="menu"
        class="bg-white"
        text-color="primary"
        @click="drawerStateComputed = !drawerStateComputed"
      />

      <q-toolbar-title>
        <q-btn
          label="SiRAl"
          class="text-body1 text-weight-bold"
          padding="xs sm"
          flat
          unelevated
          no-caps
        />
      </q-toolbar-title>

      <q-btn label="Entrar" padding="xs sm" flat unelevated no-caps />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'MainNavbar',
  props: {
    drawerState: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:drawerState'],
  setup(props, context) {
    const drawerStateComputed = computed({
      get() {
        return props.drawerState;
      },
      set(value: boolean) {
        context.emit('update:drawerState', value);
      },
    });

    return { drawerStateComputed };
  },
});
</script>
