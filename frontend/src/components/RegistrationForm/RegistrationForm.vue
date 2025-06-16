<template>
  <form class="registration-form-container">
    <div>
      Etapa <strong class="step-active">{{ currentStepActive }}</strong> de {{ totalSteps }}
    </div>

    <h2>{{ stepHeading }}</h2>

    <div class="steps-fields">
      <KeepAlive>
        <component
          :is="steps[currentStep].component"
          ref="stepRef"
        />
      </KeepAlive>
    </div>

    <Alert v-if="errorMessage" icon>
      {{ errorMessage }}
    </Alert>

    <div class="actions-container">
      <Button
        v-if="currentStep"
        variant="outline"
        @click.prevent="previousStep"
      >
        Voltar
      </Button>
  
      <Button
        :disabled="isStepDisabled"
        @click.prevent="nextStep"
      >
        Continuar
      </Button>
    </div>

  </form>
</template>

<script setup>
import Step1BasicInfo from '@/components/RegistrationForm/RegistrationFormSteps/Step1BasicInfo.vue';
import Step2PF from '@/components/RegistrationForm/RegistrationFormSteps/Step2PF.vue';
import Step2PJ from '@/components/RegistrationForm/RegistrationFormSteps/Step2PJ.vue';
import Step3Password from '@/components/RegistrationForm/RegistrationFormSteps/Step3Password.vue';
import Step4Review from '@/components/RegistrationForm/RegistrationFormSteps/Step4Review.vue';
import Button from '@/components/ui/Button.vue';
import Alert from '@/components/ui/Alert.vue';

import { ref, computed } from 'vue';
import { registrationFormStore } from '@/store/registrationFormStore';
import { toastStore } from '@/store/toastStore';
import { postForm } from '@/services/api';

const store = registrationFormStore;
const currentStep = ref(0);
const stepRef = ref({});
const errorMessage = ref('')

const steps = computed(() => [
  {
    step: 1,
    component: Step1BasicInfo,
    heading: "Seja bem vindo(a)"
  },
  {
    step: 2,
    component: personTypeSelected.value === 'pf' ? Step2PF : Step2PJ,
    heading: personTypeSelected.value === 'pf' ? "Pessoa Física" : "Pessoa Jurídica"
  },
  {
    step: 3,
    component: Step3Password,
    heading: "Senha de acesso"
  },
  {
    step: 4,
    component: Step4Review,
    heading: "Revise suas informações"
  },
]);
const personTypeSelected = computed(() => store.selectedPersonType.toLocaleLowerCase());
const currentStepActive = computed(() => steps.value[currentStep.value].step);
const totalSteps = computed(() => steps.value.length);
const stepHeading = computed(() => steps.value[currentStep.value].heading);
const isStepDisabled = computed(() => stepRef.value?.disabled ?? false);

/**
 * Volta uma etapa no formulário.
 */
const previousStep = () => currentStep.value > 0 && currentStep.value--;

/**
 * Avança a etapa do formulário caso não haja erros nos inputs.
 */
const nextStep = async () => {
  errorMessage.value = "";

  if (!stepRef.value?.isValid()) {
    errorMessage.value = "Revise os campos e tente novamente.";
    return;
  }

  if (currentStepActive.value < totalSteps.value) {
    currentStep.value++
    return;
  }

  postFormData(store, personTypeSelected.value);
}

/**
 * 
 * @param store 
 * @param personTypeSelected 
 */
const postFormData = async (store, personTypeSelected) => {
  const payload = mountFormPayload(store, personTypeSelected);

  const { success, message } = await postForm(payload);

  if (success) {
    currentStep.value = 0;
    store.email = '';
    store.name = '';
    store.cpf = '';
    store.birthday = '';
    store.phone = '';
    store.companyName = '';
    store.cnpj = '';
    store.openingDate = '';
    store.password = '';
    store.selectedPersonType = '';
  }
  
  toastStore.title = success ? "✔️ Sucesso!" : "❌ Erro!";
  toastStore.message = message;
  toastStore.active = true;
}

/**
 * 
 * @param store 
 * @param personTypeSelected 
 */
const mountFormPayload = (store = {}, personTypeSelected = '') => {
  const commonFields = {
    email: store.email,
    password: store.password,
    selectedPersonType: store.selectedPersonType
  };

  const fieldOptions = {
    pf: {
      ...commonFields,
      name: store.name,
      cpf: store.cpf,
      birthday: store.birthday,
      phone: store.phone,
      password: store.password,
      selectedPersonType: store.selectedPersonType
    },
    pj: {
      ...commonFields,
      companyName: store.companyName,
      cnpj: store.cnpj,
      openingDate: store.openingDate,
      companyPhone: store.companyPhone,
      
    }
  };

  return fieldOptions[personTypeSelected?.toLocaleLowerCase()] || {};
}
</script>

<style scoped lang="scss">
.registration-form-container {
  padding: 2rem;
  box-shadow: rgba(11, 11, 11, 0.08) 0px 0px 1px, rgba(11, 11, 11, 0.06) 0px 0px 2px, rgba(11, 11, 11, 0.04) 0px 4px 8px;
}

.step-active {
  color: var(--primary);
}

.steps-fields {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.actions-container {
  display: flex;
  gap: 1rem;
}

.alert {
  margin: 10px 0;
}

// MOBILE
@media screen and (min-width: 768px) {
  .registration-form-container {
    min-width: 500px;
  }
}
</style>
