<template>
  <q-drawer
    v-model="drawerStateComputed"
    :width="280"
    behavior="mobile"
    :overlay="true"
  >
    <!-- Header -->
    <div class="header">
      <div class="row justify-between">
        <div class="col-auto">
          <q-btn
            icon="arrow_back"
            :ripple="false"
            flat
            round
            dense
            @click="closeDrawer"
          />
        </div>
        <div class="col">
          <q-item>
            <q-item-section>
              <q-item-label class="text-right text-weight-medium"
                >Darián Capote Quintana</q-item-label
              >
              <q-item-label caption class="text-right">Trabajador</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-icon name="account_box" color="primary-1" size="2.7rem" />
            </q-item-section>
          </q-item>
        </div>
      </div>
    </div>
    <!-- / Header -->

    <q-separator spaced inset />

    <!-- Body -->
    <div class="body">
      <q-list padding>
        <q-item
          v-for="(link, index) of links"
          :to="link.to"
          active-class="link-active-class"
          exact
          clickable
          :key="`main-drawer-link-${index}`"
        >
          <q-item-section side>
            <q-icon :name="link.icon" color="primary-1" font-size="30px" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-body2 text-grey-8">{{
              link.label
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <!-- / Body -->

    <!-- Footer -->
    <div class="footer absolute-bottom">
      <q-item to="/login" clickable @click="closeSesion">
        <q-item-section side>
          <q-icon name="logout" color="primary-1" font-size="30px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body2 text-grey-8"
            >Cerrar sesión</q-item-label
          >
        </q-item-section>
      </q-item>
    </div>
    <!-- / Footer -->
  </q-drawer>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

interface ILink {
  icon: string;
  to: string;
  label: string;
}

const props = defineProps<{
  drawerState: boolean;
}>();

const emits = defineEmits<{
  (e: 'update:drawerState', value: boolean): void;
}>();

const closeDrawer = () => (drawerStateComputed.value = false);
const closeSesion = () => console.log('Close Sesion button clicked!');

const drawerStateComputed = computed({
  get() {
    return props.drawerState;
  },
  set(value: boolean) {
    emits('update:drawerState', value);
  },
});

const links: Array<ILink> = [
  { icon: 'home', to: '/', label: 'Inicio' },
  { icon: 'calendar_month', to: '/reserve', label: 'Reservar' },
  { icon: 'list', to: '/all-reserves', label: 'Todas las reservas' },
  { icon: 'bar_chart', to: '/statistics', label: 'Estadísticas' },
];
</script>

<style lang="scss">
.q-drawer-container {
  .header {
    padding-top: 1rem;
    padding-left: 10px;
    padding-right: 10px;

    .q-item {
      padding: 8px 5px;
    }
  }

  .body .q-list > .q-item {
    border-radius: 10px;
    width: fit-content;
    margin-top: 10px;
    margin-left: 15px;
    padding: 8px 12px;
    // active link
    &.link-active-class {
      background-color: $blue-1;

      .q-item__section > .q-item__label {
        color: $primary-1 !important;
      }
    }

    .q-item__section > .q-item__label {
      line-height: 0.08125em !important;
    }
  }

  .footer {
    padding-bottom: 1rem;
    .q-item {
      border-radius: 10px;
      width: fit-content;
      margin-top: 10px;
      margin-left: 15px;
      padding: 8px 12px;
      .q-item__section > .q-item__label {
        line-height: 0.08125em !important;
      }
    }
  }
}
</style>
