<template>
  <button
    :class="[`btn--${props.variant}`]"
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

<style scoped lang="scss">
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
  
  &--solid {
    color: var(--white);
    background-color: var(--primary);
    border-color: var(--primary);
  }

  &--outline {
    color: var(--primary);
    background-color: var(--white);
    border-color: var(--primary);
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--white);
    background-color: var(--disabled);
    border-color: var(--disabled);
  }
}
</style>
