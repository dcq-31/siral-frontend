<template>
  <q-page padding class="bg-grey-3">
    <div style="padding: 6rem 0.5rem">
      <q-card bordered class="q-mx-auto q-py-md" style="max-width: 350px" flat>
        <q-card-section class="text-center">
          <div class="text-h6">Bienvenido a SIRAl-UCLV</div>
          <div class="text-body2 text-grey-7">Inicia sesión para continuar</div>
        </q-card-section>

        <q-form @submit="onSubmit">
          <q-card-section class="q-gutter-y-md q-mb-sm">
            <q-input v-model="user" label="Usuario" autofocus dense>
              <template v-slot:before>
                <q-icon name="person" color="dark" />
              </template>
            </q-input>

            <q-input v-model="password" label="Contraseña" dense>
              <template v-slot:before>
                <q-icon name="key" color="dark" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn
              type="submit"
              color="primary"
              padding="sm md"
              class="text-body1 full-width"
              unelevated
              no-caps
              >Entrar</q-btn
            >
          </q-card-actions>
        </q-form>
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
