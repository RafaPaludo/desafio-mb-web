<template>
  <Step1BasicInfo />
  <Step2PF v-if="personTypeSelected === 'pf'"/>
  <Step2PJ v-if="personTypeSelected === 'pj'"/>
  <Step3Password />
</template>

<script setup>
import Step1BasicInfo from '@/components/RegistrationForm/RegistrationFormSteps/Step1BasicInfo.vue';
import Step2PF from '@/components/RegistrationForm/RegistrationFormSteps/Step2PF.vue';
import Step2PJ from '@/components/RegistrationForm/RegistrationFormSteps/Step2PJ.vue';
import Step3Password from '@/components/RegistrationForm/RegistrationFormSteps/Step3Password.vue';

import { computed } from 'vue';
import { registrationFormStore } from '@/store/registrationFormStore';
const store = registrationFormStore;

const personTypeSelected = computed(() => store.selectedPersonType.toLocaleLowerCase());
</script>
