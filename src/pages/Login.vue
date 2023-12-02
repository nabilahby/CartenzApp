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

    <div class="col-6 d-flex justify-center">
      <q-card class="q-pa-md" style="width: 400px; max-width: 80vw">
        <div class="text-h6 text-center q-mb-md">Login Form</div>
        <!-- Form Input -->
        <q-form @submit="login">
          <q-input v-model="username" dense outlined label="Username" />
          <br />

          <q-input
            v-model="password"
            dense
            outlined
            type="password"
            label="Password"
          />
          <br />

          <q-btn
            color="primary"
            label="Login"
            to="/dashboard"
            class="q-mb-md"
            style="width: 100%"
          />
          <br />
          <q-p block>
            Don't have an account yet?
            <a href="/register" style="text-decoration: none">Register Now</a>
          </q-p>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginTodo',
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const login = () => {
      // Logika login di sini
      // Anda dapat menambahkan validasi dan logika autentikasi
      // Contoh pengalihan ke halaman setelah login
      router.push('/dashboard');
    };
    return { username, password, login };
  },
});
</script>
