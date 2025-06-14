<template>
  <Input
    v-model="store.name"
    label="Nome"
  />

  <Input
    v-model="store.cpf"
    label="CPF"
  />

  <Input
    v-model="store.birthday"
    label="Data de nascimento"
    type="date"
  />

  <Input
    v-model="store.phone"
    label="Telefone"
  />  
</template>

<script setup>
import Input from '@/components/ui/Input.vue';

import { registrationFormStore } from '@/store/registrationFormStore';

const store = registrationFormStore;
</script>

<style scoped lang="scss">

</style>
