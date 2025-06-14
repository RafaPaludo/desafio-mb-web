<template>
  <Input
    v-model="store.password"
    label="Sua senha"
    type="password"
  />
</template>

<script setup>
import Input from '@/components/ui/Input.vue';

import { registrationFormStore } from '@/store/registrationFormStore';

const store = registrationFormStore;
</script>

<style scoped lang="scss">

</style>
