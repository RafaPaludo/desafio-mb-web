<template>
  <Input
    v-model="store.password"
    label="Sua senha"
    type="password"
    ref="passwordRef"
    :rules="[required, validPassword]"
  />
</template>

<script setup>
import { computed, ref } from 'vue';

import Input from '@/components/ui/Input.vue';

import { registrationFormStore } from '@/store/registrationFormStore';
import { useInputRules } from '@/composables/inputRules';

const { required, validPassword } = useInputRules();

const store = registrationFormStore;
const passwordRef = ref({});

const disabled = computed(() => !store.password);
const isValid = () => passwordRef.value?.error ? false : true;

defineExpose({
  disabled,
  isValid
})
</script>
