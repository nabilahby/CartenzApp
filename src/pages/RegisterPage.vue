<template>
  <q-page
    class="row items-center justify-evenly"
    style="
      background: linear-gradient(
        247.13deg,
        rgba(95, 208, 56, 0.69) 24.43%,
        rgba(255, 255, 255, 0) 100%
      );
    "
  >
    <div class="col-6 text-center">
      <q-img src="~assets/login.png" transtition="fade" style="width: 300px" />
    </div>
    <div class="col-6">
      <q-card class="q-pa-md" style="width: 400px; max-width: 80vw">
        <div class="text-h6 text-center q-mb-md">Register Form</div>

        <q-input
          dense
          outlined
          v-model="input.username"
          class="q-my-sm"
          label="Username"
        />
        <q-input
          dense
          outlined
          class="q-my-sm"
          v-model="input.email"
          label="Email"
        />
        <q-input
          v-model="input.password"
          dense
          outlined
          class="q-my-sm"
          type="password"
          label="Password"
        />
        <q-input
          v-model="input.passwordRepeat"
          dense
          outlined
          class="q-my-sm"
          type="password"
          label="Repeat Password"
        />
        <br />

        <q-btn
          color="primary"
          label="Register"
          to="/login"
          style="width: 100%"
          class="q-mb-md"
        />
        <q-label>
          Already have an account?
          <a href="/login" style="text-decoration: none">Login now</a>
        </q-label>
      </q-card>
    </div>
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
      passwordRepeat: '',
    });

    return {
      input,
    };
  },
});
</script>
