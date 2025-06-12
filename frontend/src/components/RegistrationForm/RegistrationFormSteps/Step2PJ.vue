<template>
  <Input
    v-model="companyName"
    label="Razão Social"
  />

  <Input
    v-model="cnpj"
    label="CNPJ"
  />

  <Input
    v-model="openingDate"
    label="Data de abertura"
    type="date"
  />

  <Input
    v-model="phone"
    label="Telefone"
  />  
</template>

<script setup>
import Input from '@/components/ui/Input.vue';

import { ref } from 'vue';

const companyName = ref('');
const cnpj = ref('');
const openingDate = ref('');
const phone = ref('');
</script>

<style scoped lang="scss">

</style>
