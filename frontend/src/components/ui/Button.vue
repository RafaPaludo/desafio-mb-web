<template>
  <button
    :class="[`btn__${props.variant}`]"
    class="btn"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'solid',
    validator(value) {
      return ['solid', 'outline'].includes(value)
    }
  }
});
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  border: 1px solid;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  display: block;
  transition: all ease .3s;

  &:hover {
    opacity: 0.7;
  }
  
  &__solid {
    color: var(--white);
    background-color: var(--primary);
    border-color: var(--primary);
  }

  &__outline {
    color: var(--primary);
    background-color: var(--white);
    border-color: var(--primary);
  }
}
</style>
