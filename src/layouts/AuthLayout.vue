<template>
  <q-layout view="hHh Lpr fFf">
    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AuthLayout',
});
</script>
