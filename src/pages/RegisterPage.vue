<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="q-pa-md" style="width: 400px; max-width: 80vw">
      <div class="text-h6 text-center q-mb-md">Register Form</div>

      <q-input v-model="input.username" dense outlined label="Username" />
      <q-input v-model="input.email" dense outlined label="Email" />
      <br />

      <q-input
        v-model="input.password"
        dense
        outlined
        type="password"
        label="Password"
      />
      <br />

      <q-btn color="primary" label="Register" to="/login" />
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'RegisterPage',
  setup() {
    const input = ref({
      username: '',
      email: '',
      password: '',
    });

    return {
      input,
    };
  },
});
</script>
