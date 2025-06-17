<template>
  <Input
    v-model="store.companyName"
    ref="companyNameRef"
    placeholder="Digite o nome da empresa"
    label="Razão Social"
  />

  <Input
    v-model="store.cnpj"
    ref="cnpjRef"
    placeholder="00.000.000/0000-00"
    mask="xx.xxx.xxx/xxxx-xx"
    label="CNPJ"
    :rules="[required, validCnpj]"
  />

  <Input
    v-model="store.openingDate"
    ref="openingdateRef"
    label="Data de abertura"
    placeholder="00/00/0000"
    mask="xx/xx/xxxx"
    :rules="[required, validOpeningDate]"
  />

  <Input
    v-model="store.companyPhone"
    ref="companyPhoneRef"
    type="tel"
    placeholder="(00) 0000-0000"
    label="Telefone"
    mask="(xx) xxxx-xxxx"
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
const companyNameRef = ref({});
const cnpjRef = ref({});
const openingdateRef = ref({});
const companyPhoneRef = ref({});

const disabled = computed(() => !store.companyName || !store.cnpj || !store.openingDate || !store.companyPhone);

const isValid = () => {
  if (companyNameRef.value?.error || cnpjRef.value?.error || openingdateRef.value?.error || companyPhoneRef.value?.error) return false;
  else return true;
}

defineExpose({
  disabled,
  isValid
});
</script>
