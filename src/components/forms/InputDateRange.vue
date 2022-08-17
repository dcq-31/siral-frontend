<template>
  <q-date
    v-model="modelDate"
    color="primary"
    :mask="ISO_DATE_MASK"
    minimal
    range
    flat
    no-unset
    bordered
  >
    <div class="row justify-end q-gutter-sm">
      <q-btn
        label="Cancelar"
        color="primary"
        padding="xs sm"
        flat
        no-caps
        unelevated
        v-close-popup="buttonsClosePopup"
      />

      <q-btn
        label="Aceptar"
        color="primary"
        padding="xs sm"
        no-caps
        unelevated
        v-close-popup="buttonsClosePopup"
        @click="accept"
      />
    </div>
  </q-date>
</template>

<script setup lang="ts">
/**
 * TODO: Limit user selection to certain times in the calendar input
 */
import { ref, Ref, defineProps, defineEmits } from 'vue';
import { IDateRange } from 'src/types/types';
import { ISO_DATE_MASK } from 'src/helpers/constants';

const props = defineProps<{
  modelValue: IDateRange;
  buttonsClosePopup: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: IDateRange): void;
}>();

const modelDate: Ref<string | IDateRange> = ref(props.modelValue);

const accept = () => {
  if (typeof modelDate.value == 'string') {
    emit('update:modelValue', {
      from: modelDate.value,
      to: modelDate.value,
    } as IDateRange);
  } else if (typeof modelDate.value == 'object') {
    emit('update:modelValue', modelDate.value);
  } else {
    /**
     * !Show log if not assert
     */
    console.log(
      `InputDateRange: Typeof value is not 'string' or 'object', it is : ${typeof modelDate.value}.`
    );
  }
};
</script>
