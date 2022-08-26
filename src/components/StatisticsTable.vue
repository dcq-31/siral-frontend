<!--
  TODO: Use QTable that support more features
-->
<template>
  <q-markup-table :style="{ maxHeight: maxHeight + 'px' }">
    <thead>
      <tr class="bg-primary text-white">
        <th
          v-for="(name, index) of colNames"
          :key="`statistics-table-head-${index}`"
          :class="index == 0 ? 'text-left' : 'text-right'"
        >
          {{ name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(date, index) of dates"
        :key="`statistics-table-body-${index}`"
      >
        <td class="text-center">{{ date }}</td>
        <td class="text-center">$ {{ data.values.breakfast[index] }}</td>
        <td class="text-center">$ {{ data.values.lunch[index] }}</td>
        <td class="text-center">$ {{ data.values.dinner[index] }}</td>
        <td class="text-center">$ {{ total[index] }}</td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { get_array_dates } from 'src/helpers/functions';
import { IRangeData } from 'src/types/types';

const colNames = ['Fecha', 'Desayunos', 'Almuerzos', 'Comidas', 'Importe'];

const props = defineProps<{
  data: IRangeData;
  maxHeight: number;
}>();

const dates = computed(() =>
  get_array_dates(props.data.range.from, props.data.range.to)
);

const total = computed(() => {
  const sum = [],
    size = dates.value.length;
  for (let i = 0; i < size; i++) {
    sum.push(
      props.data.values.breakfast[i] +
        props.data.values.lunch[i] +
        props.data.values.dinner[i]
    );
  }
  return sum;
});
</script>

<style lang="scss">
.q-markup-table {
  tbody tr:hover {
    background-color: $grey-2;
  }
  thead th,
  tbody td {
    font-size: 14px;
  }
}
</style>
