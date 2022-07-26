<template>
  <q-drawer
    v-model="drawerStateComputed"
    show-if-above
    :width="270"
    :breakpoint="700"
  >
    <q-list padding>
      <q-item>
        <q-item-section avatar>
          <q-avatar
            font-size="40px"
            color="grey-9"
            text-color="white"
            icon="account_circle"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body1 text-weight-medium q-mb-xs">
            Darián Capote Quintana</q-item-label
          >
          <q-item-label class="text-body2">
            <q-badge color="primary" class="q-py-xs"> Trabajador </q-badge>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator inset spaced />

      <q-item
        to="/"
        active-class="link-active-class"
        exact
        clickable
        v-ripple="{ color: 'grey-9' }"
      >
        <q-item-section side>
          <q-icon name="home" color="grey-9" font-size="30px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body1 text-grey-9">Inicio</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        :to="{ path: '/reserve', params: { type: 'breakfast' } }"
        active-class="link-active-class"
        exact
        clickable
        v-ripple="{ color: 'grey-9' }"
      >
        <q-item-section side>
          <q-icon name="free_breakfast" color="grey-9" font-size="30px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body1 text-grey-9">Desayunos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        :to="{ path: '/reserve', params: { type: 'dinner' } }"
        active-class="link-active-class"
        exact
        clickable
        v-ripple="{ color: 'grey-9' }"
      >
        <q-item-section side>
          <q-icon name="dinner_dining" color="grey-9" font-size="30px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body1 text-grey-9">Almuerzos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        :to="{ path: '/reserve', params: { type: 'lunch' } }"
        active-class="link-active-class"
        exact
        clickable
        v-ripple="{ color: 'grey-9' }"
      >
        <q-item-section side>
          <q-icon name="brunch_dining" color="grey-9" font-size="30px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body1 text-grey-9">Comidas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        to="/statistics"
        active-class="link-active-class"
        v-ripple="{ color: 'grey-9' }"
        exact
        clickable
      >
        <q-item-section side>
          <q-icon name="bar_chart" color="grey-9" font-size="30px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body1 text-grey-9"
            >Estadísticas</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>

    <q-item
      v-ripple="{ color: 'grey-9' }"
      @click="closeSesion"
      clickable
      class="absolute-bottom"
      style="border-bottom-right-radius: 12px"
    >
      <q-item-section side>
        <q-icon name="logout" color="grey-9" font-size="30px" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-body1 text-grey-9"
          >Cerrar sesión</q-item-label
        >
      </q-item-section>
    </q-item>
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
    // State
    const drawerStateComputed = computed({
      get() {
        return props.drawerState;
      },
      set(value: boolean) {
        context.emit('update:drawerState', value);
      },
    });

    // Methods
    const closeDrawer = () => (drawerStateComputed.value = false);
    const closeSesion = () => console.log('Close Sesion button clicked!');

    return { drawerStateComputed, closeDrawer, closeSesion };
  },
});
</script>

<style lang="scss">
.q-drawer-container {
  .q-drawer--left,
  .q-drawer__content {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    .q-list > .q-item.link-active-class {
      background-color: $blue-2;
    }
  }
}
</style>
