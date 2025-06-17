<template>
  <Input
    v-model="store.email"
    :rules="[required, validEmail]"
    placeholder="contato@email.com"
    ref="emailRef"
    label="Endereço de e-mail"
    type="email"
  />

  <RadioGroup
    v-model="store.selectedPersonType"
    :items="store.personTypes"
  />
</template>

<script setup>
import { computed, ref } from 'vue';

import Input from '@/components/ui/Input.vue';
import RadioGroup from '@/components/ui/RadioGroup.vue';

import { registrationFormStore } from '@/store/registrationFormStore';
import { useInputRules } from '@/composables/inputRules';

const { required, validEmail } = useInputRules();

const store = registrationFormStore;
const emailRef = ref({});

const disabled = computed(() => !store.email || !store.selectedPersonType);
const isValid = () => emailRef.value?.error ? false : true;

defineExpose({
  disabled,
  isValid
})
</script>
