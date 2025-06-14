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
      @input="checkRules(props.rules)"
    />

    <Alert v-if="error" icon>
      {{ error }}
    </Alert>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Alert from '@/components/ui/Alert.vue';

const error = ref('');
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
  },
  rules: {
    type: Array,
    default: () => [(value) => !value.length ? "Campo obrigatório" : null]
  }
});

/**
 * Valida uma lista de funções com regras do input.
 * Caso alguma regra não passe, exibe uma mensagem de erro.
 * 
 * @param {funtion[]} rules - Lista de funções com as regras do input
 */
const checkRules = (rules = []) => {
  if (!rules.length) return;
  
  error.value = "";

  for (const rule of rules) {
    const ruleErrorMessage = rule(model.value);

    if (ruleErrorMessage) {
      error.value = ruleErrorMessage;
      break;
    }
  }
};

defineExpose({
  error
})
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
