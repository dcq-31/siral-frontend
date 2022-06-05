<template>
  <q-page padding>
    <div style="padding: 5rem 2rem">
      <q-card
        bordered
        class="shadow-2 text-center q-mx-auto"
        style="max-width: 300px"
      >
        <q-card-section>
          <q-avatar size="6rem" color="grey-3" class="border-primary">
            <q-icon name="restaurant" color="primary" size="2.5rem" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="text-h6 text-grey-10">Inicia Sesión</div>
        </q-card-section>

        <q-card-section class="q-mx-sm q-py-xs">
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input v-model="user" label="Usuario *" autofocus dense />

            <q-input v-model="password" label="Contraseña *" dense />

            <q-card-actions align="center">
              <q-btn
                :ripple="false"
                type="submit"
                color="primary"
                padding="xs sm"
                class="text-body1"
                unelevated
                no-caps
                >Entrar</q-btn
              >
            </q-card-actions>
          </q-form>
        </q-card-section>

        <q-card-section class="text-body2 q-py-sm">
          <q-btn
            to="login/recover-password"
            text-color="primary"
            padding="none"
            class="text-body2"
            :ripple="false"
            unelevated
            no-caps
            >Olvidaste tu contraseña?</q-btn
          >
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const user = ref(null);
    const password = ref(null);

    return {
      user,
      password,

      onSubmit() {
        console.log('Submit');
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.border-primary {
  border: solid 1px $primary;
}
</style>
