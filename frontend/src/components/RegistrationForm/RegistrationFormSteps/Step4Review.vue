<template>
  <Input
    v-model="store.email"
    ref="emailRef"
    label="Endereço de e-mail"
    placeholder="contato@email.com"
    type="email"
    :rules="[required, validEmail]"
  />
  <Step2PF v-if="personTypeSelected === 'pf'" ref="pfRef" />
  <Step2PJ v-if="personTypeSelected === 'pj'" ref="pjRef" />
  <Step3Password ref="passwordRef" />
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
const pfRef = ref({});
const pjRef = ref({});
const passwordRef = ref({});

const personTypeSelected = computed(() => store.selectedPersonType.toLowerCase());

const isValid = () => {
  const personTypeRef = personTypeSelected.value === 'pf' ? pfRef : pjRef;
  
  if (
    emailRef.value?.error ||
    !passwordRef.value.isValid() ||
    !personTypeRef.value.isValid()
  ) return false

  return true;
}

defineExpose({
  isValid
});
</script>
