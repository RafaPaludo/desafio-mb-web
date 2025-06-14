<template>
  <div
    class="alert"
    :class="`alert--${props.color}`"
  >
    <img width="16px" height="16px" :src="image" alt="Ícone de alerta">
    <slot />
  </div>
</template>

<script setup>
import image from "@/assets/img/alert.png"

const props = defineProps({
  color: {
    type: String,
    default: 'error',
    validator(value) {
      return ['error'].includes(value)
    },
  },
  icon: {
    type: Boolean,
    default: true,
  }
});
</script>

<style lang="scss">
.alert {
  padding: 0.25rem;
  border-radius: 0.5rem;
  width: 100%;
  gap: 0.5rem;
  display: flex;
  align-items: center;

  &--error {
    color: var(--error);
  }
}
</style>