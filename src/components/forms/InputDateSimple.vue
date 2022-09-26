<template>
  <q-date
    v-model="model"
    :mask="CALENDAR_MASK"
    minimal
    text-color="white"
    color="primary"
  >
    <div class="row items-center justify-end q-gutter-sm">
      <slot>
        <q-btn
          label="Aceptar"
          color="primary"
          no-caps
          unelevated
          dense
          v-close-popup
        />
      </slot>
    </div>
  </q-date>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const CALENDAR_MASK = 'DD/MM/YYYY';

interface IInputDateSimpleProps {
  modelValue: string | null;
}

interface IInputDateSimpleEmits {
  (_e: 'update:modelValue', _value: string | null): void;
}

const props = defineProps<IInputDateSimpleProps>();
const eventEmit = defineEmits<IInputDateSimpleEmits>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(_value: string | null) {
    eventEmit('update:modelValue', _value);
  },
});
</script>
