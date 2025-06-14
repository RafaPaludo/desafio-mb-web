import { reactive } from "vue";

export const registrationFormStore = reactive({
  email: '',
  name: '',
  cpf: '',
  birthday: '',
  phone: '',
  companyName: '',
  cnpj: '',
  openingDate: '',
  companyPhone: '',
  password: '',
  selectedPersonType: '',
  personTypes: [
    {
      label: 'Pessoa física',
      value: 'PF'
    },
    {
      label: 'Pessoa Jurídica',
      value: 'PJ'
    }
  ],
});