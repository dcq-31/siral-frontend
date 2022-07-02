<template>
  <q-layout view="hHh lpR fFf">
    <MainHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import MainHeader from 'components/layout/MainHeader.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    MainHeader,
  },
  setup() {
    const drawer_state = ref(false);

    return { drawer_state };
  },
});
</script>
