<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-y-md">
      <!-- Colors -->
      <div class="row q-gutter-y-md">
        <div class="text-h6 text-bold">Colors</div>
        <div class="col-12 q-gutter-sm">
          <q-btn
            v-for="(color, index) of theme"
            :key="`test-page-btn-${index}`"
            :color="color"
            :label="color"
            :ripple="false"
            size="md"
            no-caps
            unelevated
          />
        </div>
      </div>

      <div class="row q-gutter-y-md">
        <div class="text-h6 text-bold">Cards by colors</div>
        <div class="col-12 q-gutter-md">
          <q-card
            v-for="(color, index) of theme"
            :key="`test-page-card-${index}`"
            :class="`bg-${color}`"
            dark
            flat
          >
            <q-card-section>
              <div class="text-h6">{{ color }}</div>
              <div class="text-subtitle2">Subtitle</div>
            </q-card-section>
            <q-card-section> Body </q-card-section>
          </q-card>
        </div>
      </div>
      <!-- / Colors -->

      <!-- Buttons -->
      <div class="row q-gutter-y-md">
        <div class="text-h6 text-bold">Buttons</div>
        <div class="col-12 q-gutter-md">
          <q-btn
            color="primary"
            label="Hello World"
            :ripple="false"
            size="md"
            padding="sm md"
            no-caps
            unelevated
            class="text-body2 text-weight-medium"
          />

          <q-btn
            color="primary"
            label="Hello World"
            :ripple="false"
            size="md"
            padding="sm md"
            no-caps
            outline
            unelevated
            class="text-body2 text-weight-medium"
          />
        </div>

        <div class="col-12 q-gutter-md">
          <q-btn
            color="primary"
            label="Hello World"
            :ripple="false"
            padding="xs sm"
            no-caps
            unelevated
          />

          <q-btn
            color="primary"
            label="Hello World"
            :ripple="false"
            padding="xs sm"
            no-caps
            outline
            unelevated
          />
        </div>
      </div>
      <!-- / Buttons -->
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
