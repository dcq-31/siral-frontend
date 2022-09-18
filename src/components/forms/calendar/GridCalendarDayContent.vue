<template>
  <div class="day-content text-center q-mx-auto" @click="showDayInformation">
    <div class="day-number" :class="[isDayinPeriod]">
      <q-avatar size="1.8rem" font-size=".9rem" v-bind="avatarComputedProps">
        {{ day.getDate() }}
      </q-avatar>
    </div>

    <div class="day-items">
      <q-chip
        v-for="(item, index) in items"
        :key="`grid-calendar-day-content-${index}`"
        :color="
          item.title == 'breakfast'
            ? 'blue'
            : item.title == 'lunch'
            ? 'yellow'
            : 'green'
        "
        rounded
        style="font-size: 3px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { IQAvatarProps } from 'src/types';
import { ICalendarItem } from 'vue-simple-calendar/dist/src/ICalendarItem';

interface ICalendarDayContentProps {
  period: Date;
  day: Date;
  items: ICalendarItem[];
}

const props = defineProps<ICalendarDayContentProps>();
const avatarStatus = ref(false);

/**
 * Is Day in the current period
 */
const isDayinPeriod = computed(() =>
  props.day.getMonth() === props.period.getMonth() ? '' : 'hidden'
);

/**
 * Computed props for avatar component
 */
const avatarComputedProps = computed<IQAvatarProps>(() => {
  if (props.items.length > 0)
    return {
      color: 'primary',
      textColor: 'white',
    };
  else
    return {
      color: undefined,
      textColor: undefined,
    };
});

/**
 *  Show day information and config
 */
const showDayInformation = () => (avatarStatus.value = !avatarStatus.value);
</script>

<style lang="scss" scoped>
.day-content {
  color: $grey-8;
}
</style>
