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
              <q-avatar
                size="2.5rem"
                font-size="2rem"
                color="primary"
                text-color="white"
                icon="person_outline"
              />
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
          :to="{ name: link.to }"
          active-class="link-active-class"
          exact
          clickable
          :key="`main-drawer-link-${index}`"
        >
          <q-item-section side>
            <q-icon :name="link.icon" font-size="30px" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-body2">{{ link.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <!-- / Body -->

    <!-- Footer -->
    <div class="footer absolute-bottom">
      <q-item to="/login" clickable @click="closeSesion">
        <q-item-section side>
          <q-icon name="logout" color="dark" font-size="30px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body2 text-dark"
            >Cerrar sesión</q-item-label
          >
        </q-item-section>
      </q-item>
    </div>
    <!-- / Footer -->
  </q-drawer>
</template>

<script setup lang="ts">
import { ROUTES } from 'src/router/names';
import { computed } from 'vue';

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

const links: Array<ILink> = [
  { icon: 'favorite_border', to: ROUTES.HOME, label: 'Inicio' },
  { icon: 'grid_view', to: ROUTES.BOOKING, label: 'Reservas' },
  { icon: 'show_chart', to: ROUTES.STATISTICS, label: 'Estadísticas' },
  { icon: 'code', to: ROUTES.TEST, label: 'Página de Testing' },
];

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

    .q-item__section > {
      .q-item__label,
      .q-icon {
        line-height: 0.08125em !important;
        color: $dark !important;
      }
    }
    // active link
    &.link-active-class {
      background-color: lighten($primary, 40%);

      .q-item__section > {
        .q-item__label,
        .q-icon {
          color: $primary !important;
        }
      }
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
