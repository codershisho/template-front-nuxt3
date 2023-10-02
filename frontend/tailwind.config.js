/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // JIT(Just-in-Time)モード有効
  prefix: "tw-", // `tw-`を追加
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
