<template>
  <Input
    v-model="store.email"
    label="Endereço de e-mail"
    type="email"
  />

  <RadioGroup
    v-model="store.selectedPersonType"
    :items="store.personTypes"
  />
</template>

<script setup>
import Input from '@/components/ui/Input.vue';
import RadioGroup from '@/components/ui/RadioGroup.vue';

import { registrationFormStore } from '@/store/registrationFormStore';

const store = registrationFormStore;
</script>

<style scoped lang="scss">

</style>
