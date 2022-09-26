<template>
  <q-form @submit.prevent="emitValues">
    <div class="row justify-center">
      <div class="col-10 col-sm-6">
        <!-- First date input -->
        <q-input
          v-model="dateRange.from"
          :color="INPUT_DATE.COLOR"
          :mask="INPUT_MASK"
          :placeholder="INPUT_DATE.PLACEHOLDER"
          lazy-rules
          outlined
          no-error-icon
          :rules="rules"
        >
          <template v-slot:append>
            <q-icon
              :name="INPUT_DATE.ICON_NAME"
              color="grey-9"
              class="cursor-pointer"
              size="20px"
            >
              <q-popup-proxy cover persistent>
                <InputDateSimple v-model="dateRange.from" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <!-- / First date input -->
      </div>
      <div class="col-10 col-sm-6">
        <!-- Second date input -->
        <q-input
          v-model="dateRange.to"
          :color="INPUT_DATE.COLOR"
          :mask="INPUT_MASK"
          :placeholder="INPUT_DATE.PLACEHOLDER"
          lazy-rules
          outlined
          no-error-icon
          :rules="rules"
        >
          <template v-slot:append>
            <q-icon
              :name="INPUT_DATE.ICON_NAME"
              color="grey-9"
              class="cursor-pointer"
              size="20px"
            >
              <q-popup-proxy cover persistent>
                <InputDateSimple v-model="dateRange.to" />
              </q-popup-proxy>
            </q-icon>
            <!-- / Second date input -->
          </template>
        </q-input>
      </div>
    </div>

    <div>
      <q-btn
        label="Reservar"
        type="submit"
        color="primary"
        :ripple="false"
        unelevated
        no-caps
        class="button"
      />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref, Ref, computed } from 'vue';
import { date, ValidationRule } from 'quasar';
import { IDateRange, IFullDayOffer, IOffer } from 'src/types';
import { dateIsValid, FRIENDLY_DATE_MASK } from 'src/helpers';
import InputDateSimple from 'src/components/forms/InputDateSimple.vue';

const INPUT_DATE = {
  COLOR: 'grey-9',
  ICON_NAME: 'mode_edit_outline',
  PLACEHOLDER: 'dd-mm-yyyy',
};

const INPUT_MASK = '##-##-####';

interface IReserveQuickRangeProps {
  dayOffers: IFullDayOffer[];
}
interface IReserveQuickRangeEmits {
  (_e: 'submit', _value: (IFullDayOffer | IOffer)[]): void;
}

const props = defineProps<IReserveQuickRangeProps>();
const emits = defineEmits<IReserveQuickRangeEmits>();

const { isBetweenDates, extractDate } = date;

/**
 * Range of dates
 */
const dateRange: Ref<IDateRange> = ref({
  from: null,
  to: null,
});

/**
 * Range of dates formatted to 'dd-mm-yyyy'
 */
const dateRangeFormatted = computed<IDateRange>(() => {
  return {
    from:
      dateRange.value.from === null
        ? null
        : extractDate(dateRange.value.from, FRIENDLY_DATE_MASK).toISOString(),
    to:
      dateRange.value.to === null
        ? null
        : extractDate(dateRange.value.to, FRIENDLY_DATE_MASK).toISOString(),
  };
});

/**
 * Validation rules
 */
const rules: ValidationRule<string>[] = [
  (_value) => (_value && _value.length > 0) || 'Requerido',
  (_value) => dateIsValid(_value) || 'Fecha inválida',
];

/**
 * Send selected offers to parent component
 */
const emitValues = () => {
  if (
    dateRangeFormatted.value.from != null &&
    dateRangeFormatted.value.to != null &&
    new Date(dateRangeFormatted.value.from) <=
      new Date(dateRangeFormatted.value.to)
  ) {
    /**
     * Return true when date's offer is bettween both dates
     */
    const filter_by_date = (_offer: IFullDayOffer | IOffer) =>
      isBetweenDates(
        _offer.date,
        dateRange.value.from as string,
        dateRange.value.to as string
      );
    emits('submit', props.dayOffers.filter(filter_by_date));
  } else {
    /**
     * TODO: Use notify quasar plugin to show the error
     */
    alert('El intervalo de fechas no es válido.');
  }
};
</script>
