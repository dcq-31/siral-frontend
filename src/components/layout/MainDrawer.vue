<template>
  <q-drawer
    v-model="drawerStateComputed"
    show-if-above
    :width="230"
    :breakpoint="700"
  >
    <q-list bordered separator>
      <q-item class="q-py-md" v-ripple>
        <q-item-section avatar>
          <q-avatar
            icon="person"
            size="xl"
            font-size="30px"
            text-color="primary"
            class="shadow-3"
            round
          />
        </q-item-section>

        <q-item-section>
          <q-item-label>Jon Doe</q-item-label>
          <q-item-label caption lines="1">Trabajador</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section side>
          <q-icon name="free_breakfast" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body2 text-grey-9">Desayunos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section side>
          <q-icon name="dinner_dining" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body2 text-grey-9">Almuerzos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section side>
          <q-icon name="brunch_dining" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body2 text-grey-9">Comidas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section side>
          <q-icon name="bar_chart" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body2 text-grey-9"
            >Estadísticas</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'MainDrawer',
  props: {
    drawerState: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:drawerState'],
  setup(props, context) {
    const drawerStateComputed = computed({
      get() {
        return props.drawerState;
      },
      set(value: boolean) {
        context.emit('update:drawerState', value);
      },
    });

    return { drawerStateComputed };
  },
});
</script>
