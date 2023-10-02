<template>
  <h1 class="tw-text-3xl tw-font-bold tw-underline">Hello world!</h1>
  <pre>{{ auth.user }}</pre>
  <v-text-field label="email" v-model="form.email"></v-text-field>
  <v-text-field label="password" v-model="form.password"></v-text-field>
  <v-btn color="primary" @click="login">ログイン</v-btn>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/useAuthStore";

const form = ref({
  email: "admin@example.com",
  password: "hogehoge",
});

const auth = useAuthStore();

async function login() {
  await auth.login(form.value);

  if (auth.isLoggedIn) {
  }
}
</script>

<style scoped></style>
