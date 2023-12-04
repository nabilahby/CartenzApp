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
    <div class="col-7 q-pa-xl">
      <h6 style="color: #34a853; font-family: poppins; font-weight: bolder">
        Hello, welcome
      </h6>
      <h3
        style="
          font-family: poppins;
          font-weight: bold;
          margin-top: -30px;
          margin-bottom: 20px;
        "
      >
        Discover the best hotels on your island
      </h3>
      <q-label style="font-family: poppins">
        Choose a hotel that makes you comfortable
      </q-label>
      <br />
      <q-label style="font-family: poppins">Register now</q-label>
      <br />
      <q-btn
        to="/register"
        label="Register"
        style="background-color: #34a853"
        class="q-mt-lg text-white"
      />
      <q-btn to="/login" label="Login" class="q-mt-lg q-ml-md" />
    </div>
    <div class="col-5">
      <q-img src="~assets/login.png" transtition="fade" style="width: 300px" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
  },
});
</script>
