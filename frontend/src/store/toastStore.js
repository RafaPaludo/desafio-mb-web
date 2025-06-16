import { reactive } from "vue";

export const toastStore = reactive({
  active: false,
  title: "Título",
  message: ""
});