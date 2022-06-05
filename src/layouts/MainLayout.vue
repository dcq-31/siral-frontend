<template>
  <q-layout view="hHh lpR fFf">
    <MainNavbar v-model:drawer-state="drawer_state" />
    <MainDrawer v-model:drawer-state="drawer_state" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import MainNavbar from 'components/layout/MainNavbar.vue';
import MainDrawer from 'components/layout/MainDrawer.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    MainNavbar,
    MainDrawer,
  },
  setup() {
    const drawer_state = ref(false);

    return { drawer_state };
  },
});
</script>
