<template>
  <Input
    v-model="store.companyName"
    label="Razão Social"
  />

  <Input
    v-model="store.cnpj"
    label="CNPJ"
    ref="cnpjRef"
    :rules="[required, validCnpj]"
  />

  <Input
    v-model="store.openingDate"
    label="Data de abertura"
    type="date"
    ref="openingdateRef"
    :rules="[required, validOpeningDate]"
  />

  <Input
    v-model="store.companyPhone"
    label="Telefone"
    ref="companyPhoneRef"
    :rules="[required, validCompanyPhone]"
  />  
</template>

<script setup>
import { computed, ref } from 'vue';

import Input from '@/components/ui/Input.vue';

import { registrationFormStore } from '@/store/registrationFormStore';
import { useInputRules } from '@/composables/inputRules';

const { required, validCnpj, validOpeningDate, validCompanyPhone } = useInputRules();

const store = registrationFormStore;
const cnpjRef = ref({});
const openingdateRef = ref({});
const companyPhoneRef = ref({});

const disabled = computed(() => !store.companyName || !store.cnpj || !store.openingDate || !store.companyPhone);

const isValid = () => {
  if (cnpjRef.value?.error || openingdateRef.value?.error || companyPhoneRef.value?.error) return false;
  else return true;
}

defineExpose({
  disabled,
  isValid
})
</script>
