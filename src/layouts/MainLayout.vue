<template>
  <q-layout view="hHh lpR fFf">
    <MainHeader @update:drawer-state="toggleDrawer" />
    <MainDrawer v-model:drawer-state="drawerState" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <MainFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainHeader from 'components/layouts/MainHeader.vue';
import MainFooter from 'components/layouts/MainFooter.vue';
import MainDrawer from 'components/layouts/MainDrawer.vue';

const drawerState = ref(false);
const toggleDrawer = (value: boolean) => (drawerState.value = value);
</script>
