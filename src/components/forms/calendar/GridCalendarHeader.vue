<template>
  <div class="row items-center justify-between q-pa-sm">
    <div class="col-auto">
      <q-btn
        label="Hoy"
        color="primary"
        :ripple="false"
        padding="xs 12px"
        unelevated
        no-caps
        class="text-subtitle1 text-weight-medium"
        @click="emits('update:modelValue', new Date())"
      />
    </div>

    <div class="col-auto">
      <q-icon
        name="chevron_left"
        color="grey-8"
        size="18px"
        left
        class="cursor-pointer q-my-auto"
        @click="emits('update:modelValue', previousPeriod)"
      />
      <span class="text-subtitle1 text-grey-8"> {{ month }}, {{ year }} </span>
      <q-icon
        name="chevron_right"
        color="grey-8"
        size="18px"
        right
        class="cursor-pointer q-my-auto"
        @click="emits('update:modelValue', nextPeriod)"
      />
    </div>
    <div class="col-auto">
      <q-btn
        icon="more_vert"
        color="grey-8"
        :ripple="false"
        size="12px"
        flat
        unelevated
        round
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { MONTHS } from 'src/helpers';

interface ICalendarHeaderProps {
  modelValue: Date;
  nextPeriod: Date;
  previousPeriod: Date;
}
interface ICalendarHeaderEmits {
  (e: 'update:modelValue', value: Date): void;
}
const props = defineProps<ICalendarHeaderProps>();
const emits = defineEmits<ICalendarHeaderEmits>();

const month = computed(() => MONTHS.ES.FULL[props.modelValue.getMonth()]);
const year = computed(() => props.modelValue.getFullYear());
</script>
