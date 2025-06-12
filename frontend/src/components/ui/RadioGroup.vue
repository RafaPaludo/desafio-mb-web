<template>
  <fieldset class="radio-fieldset">
    <div
      v-for="item in props.items"
      :key="item.value"
      class="radio-container"
    >
      <input
        v-model="model"
        type="radio"
        name="radio_name"
        :id="item.value"
        :value="item.value"
      >
      <label :for="item.value">{{ item.label }}</label>
    </div>
  </fieldset>
</template>

<script setup>
const model = defineModel()
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss">
.radio-fieldset {
  border: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}

.radio-container {
  display: flex;
  gap: 0.25rem;
}
</style>
