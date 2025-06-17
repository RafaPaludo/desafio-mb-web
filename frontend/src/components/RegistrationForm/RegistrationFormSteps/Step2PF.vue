<template>
  <Input
    v-model="store.name"
    ref="nameRef"
    placeholder="Digite seu nome"
    label="Nome"
  />

  <Input
    v-model="store.cpf"
    ref="cpfRef"
    placeholder="000.000.000-00"
    label="CPF"
    mask="xxx.xxx.xxx-xx"
    :rules="[required, validCpf]"
  />

  <Input
    v-model="store.birthday"
    ref="birthdayRef"
    label="Data de nascimento"
    mask="xx/xx/xxxx"
    :rules="[required, validBirthday]"
  />

  <Input
    v-model="store.phone"
    ref="phoneRef"
    label="Telefone"
    placeholder="(00) 0 0000-0000"
    type="tel"
    mask="(xx) x xxxx-xxxx"
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
