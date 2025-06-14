<template>
  <Input
    v-model="store.email"
    label="Endereço de e-mail"
    type="email"
    ref="emailRef"
    :rules="[required, validEmail]"
  />
  <Step2PF v-if="personTypeSelected === 'pf'" />
  <Step2PJ v-if="personTypeSelected === 'pj'" />
  <Step3Password />
</template>

<script setup>
import Input from '@/components/ui/Input.vue';
import Step2PF from '@/components/RegistrationForm/RegistrationFormSteps/Step2PF.vue';
import Step2PJ from '@/components/RegistrationForm/RegistrationFormSteps/Step2PJ.vue';
import Step3Password from '@/components/RegistrationForm/RegistrationFormSteps/Step3Password.vue';

import { computed, ref } from 'vue';
import { registrationFormStore } from '@/store/registrationFormStore';
import { useInputRules } from '@/composables/inputRules';

const { required, validEmail } = useInputRules();

const store = registrationFormStore;
const emailRef = ref({});

const personTypeSelected = computed(() => store.selectedPersonType.toLocaleLowerCase());

const isValid = () => emailRef.value?.error ? false : true;

defineExpose({
  isValid
})
</script>
