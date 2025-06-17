<template>
  <div class="input-wrapper">
    <div class="input-label">
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
        :type="currentType"
        :placeholder="placeholder"
        :required="required"
        class="input-element"
        @input="addMask($event)"
        @focusout="checkRules(props.rules)"
      />
      
      <i
        v-if="type === 'password'"
        class="password-visibility"
        :class="passwordVisible ? 'password-visible' : 'password-hidden'"
        @click="togglePasswordVisibility"
      ></i>
    </div>

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
      return ['text', 'number', 'email', 'password', 'date', 'tel'].includes(value)
    }
  },
  label: {
    type: String,
    default: 'text'
  },
  required: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  rules: {
    type: Array,
    default: () => [(value) => !value.length ? "Campo obrigatório" : null]
  },
  mask: {
    type: String,
    default: ""
  }
});

const passwordVisible = ref(false);
const currentType = ref(props.type);

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
    debugger
    const ruleErrorMessage = rule(model.value);

    if (ruleErrorMessage) {
      error.value = ruleErrorMessage;
      break;
    }
  }
};

/**
 * Adiciona uma máscara no valor do input.
 * 
 * @param {InputEvent} event - Evento de input.
 */
const addMask = (event) => {
  if (
    !props.mask ||
    event.inputType === "deleteContentBackward" // Botão de limpar
  ) return;

  const maskSubstring = 'x';
  const mask = props.mask.toLowerCase();
  const value = event?.target?.value;
  const valueOnlyDigit = value
    .replace(/\D/g, '')
    .split('');

  // Troca cada espaço da máscara ("x") pelos caracteres digitados.
  const addValueIntoMask = valueOnlyDigit.reduce((acc, number) => acc.replace(maskSubstring, number), mask);
  const valueIntoMaskAsList = addValueIntoMask.split('');

  // Verifica se ainda existem espaços da máscara a serem preenchidos.
  const indexOfFirstMaskSubstring = valueIntoMaskAsList.findIndex(letter => letter === maskSubstring);
  
  // Remove o restante da máscara ainda não usada.
  const maskedValue =
    indexOfFirstMaskSubstring > -1 ?
    valueIntoMaskAsList.filter((_, index) => index < indexOfFirstMaskSubstring) :
    valueIntoMaskAsList;
  model.value = maskedValue.join('');
};

/**
 * Troca a visibilidade do input do tipo "password".
 */
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
  currentType.value = passwordVisible.value ? 'text' : 'password';
}

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

.input-label {
  position: relative;
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

.password-visibility {
  cursor: pointer;
  position: absolute;
  width: 24px;
  height: 24px;
  right: 12px;
  bottom: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  &.password-visible {
    background-image: url('../../assets/img/visible.png');
  }
  
  &.password-hidden {
    background-image: url('../../assets/img/hidden.png');
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
