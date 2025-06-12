<template>
  <div class="input-wrapper">
    <label
      v-if="label"
      :for="label"
    >
      {{ label }}
    </label>
    
    <input
      v-model="model"
      :id="label"
      :name="label"
      :type="type"
      class="input-element"
    />
  </div>
</template>

<script setup>
const model = defineModel()
const props = defineProps({
  type: {
    type: String,
    default: 'text',
    validator(value) {
      return ['text', 'number', 'email', 'password', 'date'].includes(value)
    }
  },
  label: {
    type: String,
    default: 'text'
  }
});
</script>

<style lang="scss">
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: .25rem;
}

.input-element {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid var(--black);;

  &:focus {
    outline-color: var(--primary);
    border-color: var(--primary);
  }
}
</style>
