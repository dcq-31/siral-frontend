<template>
  <q-page padding>
    <div class="container">
      <q-card bordered class="q-mx-auto q-py-md" style="max-width: 350px" flat>
        <q-card-section class="text-center">
          <div class="text-body1 text-weight-bold q-mb-sm">Bienvenido</div>
          <div class="text-body2 text-grey-7">Inicia sesión para continuar</div>
        </q-card-section>

        <!-- Submit form -->
        <q-form @submit="onSubmit">
          <q-card-section class="q-gutter-y-md q-mb-sm">
            <q-input v-model="user" label="Usuario" autofocus dense>
              <template v-slot:before>
                <q-icon name="person" color="primary" />
              </template>
            </q-input>

            <q-input v-model="password" label="Contraseña" dense>
              <template v-slot:before>
                <q-icon name="key" color="primary" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn
              type="submit"
              color="primary"
              padding="sm md"
              :ripple="false"
              class="text-body2 text-weight-medium full-width"
              unelevated
              no-caps
              >Entrar</q-btn
            >
          </q-card-actions>
        </q-form>
        <!-- / Submit form -->
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const user = ref(null);
const password = ref(null);
const onSubmit = () => {
  console.log('Submit');
};
</script>

<style lang="scss">
.container {
  padding: 6rem 0.5rem;
}
</style>
