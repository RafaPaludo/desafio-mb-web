<template>
  <form class="registration-form-container" >
    <div>
      Etapa <strong class="step-active">{{ currentStepActive }}</strong> de {{ totalSteps }}
    </div>

    <h2>{{ stepHeading }}</h2>

    <div class="steps-fields">
      <component :is="steps[currentId].component" />
    </div>

    <div class="actions-container">
      <Button
        v-if="currentId"
        variant="outline"
        @click.prevent="previousStep"
      >
        Voltar
      </Button>
  
      <Button
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

import { ref, computed } from 'vue';
import { registrationFormStore } from '@/store/registrationFormStore';

const store = registrationFormStore;
const currentId = ref(0);

const steps = computed(() => [
  {
    step: 1,
    component: Step1BasicInfo,
    heading: "Seja bem vindo(a)"
  },
  {
    step: 2,
    component: personTypeSelected.value === 'pf' ? Step2PF : Step2PJ,
    heading: personTypeSelected.value === 'pf' ? "Pessoa Física" : "Pessoa Jurídica",
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
const currentStepActive = computed(() => steps.value[currentId.value].step);
const totalSteps = computed(() => steps.value.length);
const stepHeading = computed(() => steps.value[currentId.value].heading);

/**
 * Avança a etapa do formulário.
 */
const nextStep = () => currentId.value < totalSteps.value && currentId.value++;

/**
 * Volta uma etapa no formulário.
 */
const previousStep = () => currentId.value > 0 && currentId.value--;
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

// MOBILE
@media screen and (min-width: 768px) {
  .registration-form-container {
    min-width: 500px;
  }
}
</style>
