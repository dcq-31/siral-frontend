<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="row q-gutter-y-md">
        <div class="col-12 q-gutter-sm">
          <q-btn
            v-for="(color, index) of theme"
            :key="`test-page-btn-${index}`"
            :color="color"
            :label="color"
            no-caps
          />
        </div>
        <div class="col-12 q-gutter-md">
          <q-card
            v-for="(color, index) of theme"
            :key="`test-page-card-${index}`"
            :class="`bg-${color}`"
            dark
          >
            <q-card-section>
              <div class="text-h6">{{ color }}</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const theme = [
  'primary',
  'primary-1',
  'primary-2',
  'secondary',
  'secondary-1',
  'accent',
  'dark',
  'positive',
  'negative',
  'info',
  'warning',
];
</script>
