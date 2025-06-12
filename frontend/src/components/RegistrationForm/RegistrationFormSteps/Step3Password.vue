<template>
  <Input
    v-model="password"
    label="Sua senha"
    type="password"
  />
</template>

<script setup>
import Input from '@/components/ui/Input.vue';

import { ref } from 'vue';

const password = ref('');
</script>

<style scoped lang="scss">

</style>
