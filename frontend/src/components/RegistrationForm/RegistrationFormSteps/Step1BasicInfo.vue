<template>
  <Input
    v-model="email"
    label="Endereço de e-mail"
    type="email"
  />

  <RadioGroup
    v-model="radio"
    :items="items"
  />
</template>

<script setup>
import Input from '@/components/ui/Input.vue';
import RadioGroup from '@/components/ui/RadioGroup.vue';

import { ref } from 'vue';

const email = ref('');
const radio = ref('');
const items = ref([
  {
    label: 'Pessoa física',
    value: 'PF'
  },
  {
    label: 'Pessoa Jurídica',
    value: 'PJ'
  }
]);
</script>

<style scoped lang="scss">

</style>
