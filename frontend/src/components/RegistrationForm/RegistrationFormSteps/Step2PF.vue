<template>
  <Input
    v-model="store.name"
    label="Nome"
    ref="nameRef"
  />

  <Input
    v-model="store.cpf"
    label="CPF"
    ref="cpfRef"
    :rules="[required, validCpf]"
  />

  <Input
    v-model="store.birthday"
    label="Data de nascimento"
    type="date"
    ref="birthdayRef"
    :rules="[required, validBirthday]"
  />

  <Input
    v-model="store.phone"
    label="Telefone"
    ref="phoneRef"
    :rules="[required, validPhone]"
  />  
</template>

<script setup>
import { computed, ref } from 'vue';

import Input from '@/components/ui/Input.vue';

import { registrationFormStore } from '@/store/registrationFormStore';
import { useInputRules } from '@/composables/inputRules';

const { required, validCpf, validPhone, validBirthday } = useInputRules();

const store = registrationFormStore;
const nameRef = ref({});
const cpfRef = ref({});
const birthdayRef = ref({});
const phoneRef = ref({});

const disabled = computed(() => !store.name || !store.cpf || !store.birthday || !store.phone);

const isValid = () => {
  if (nameRef.value?.error || cpfRef.value?.error || birthdayRef.value?.error || phoneRef.value?.error) return false;
  else return true;
}

defineExpose({
  disabled,
  isValid
})
</script>
