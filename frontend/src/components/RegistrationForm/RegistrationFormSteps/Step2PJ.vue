<template>
  <Input
    v-model="store.companyName"
    label="Razão Social"
  />

  <Input
    v-model="store.cnpj"
    label="CNPJ"
  />

  <Input
    v-model="store.openingDate"
    label="Data de abertura"
    type="date"
  />

  <Input
    v-model="store.companyPhone"
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
