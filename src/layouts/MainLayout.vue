<template>
  <q-layout view="hHh lpR fFf">
    <MainHeader @toggle:drawerState="toggleDrawer" />
    <MainDrawer v-model:drawer-state="drawerState" />
    <q-page-container>
      <router-view />
    </q-page-container>
    <MainFooter />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// Layout components
import MainHeader from 'components/layouts/MainHeader.vue';
import MainFooter from 'components/layouts/MainFooter.vue';
import MainDrawer from 'components/layouts/MainDrawer.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    MainHeader,
    MainDrawer,
    MainFooter,
  },
  setup() {
    // State
    const drawerState = ref(false);

    // Methods
    const toggleDrawer = () => (drawerState.value = !drawerState.value);
    return { drawerState, toggleDrawer };
  },
});
</script>
