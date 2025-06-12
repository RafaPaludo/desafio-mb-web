<template>
  <Input
    v-model="name"
    label="Nome"
  />

  <Input
    v-model="cpf"
    label="CPF"
  />

  <Input
    v-model="birthday"
    label="Data de nascimento"
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

const name = ref('');
const cpf = ref('');
const birthday = ref('');
const phone = ref('');
</script>

<style scoped lang="scss">

</style>
