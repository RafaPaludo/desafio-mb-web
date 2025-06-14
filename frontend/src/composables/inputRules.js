export function useInputRules () {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const cpfRegex = /^\d{3}\d{3}\d{3}\d{2}$/;
  const cnpjRegex = /^\d{2}\d{3}\d{3}\d{4}\d{2}$/;

  const required = (value) => !value.length ? "Campo obrigatório" : null;
  const validEmail = (value) => !emailRegex.test(value) ? "E-mail inválido." : null;
  const validCpf = (value) => !cpfRegex.test(value) ? "CPF inválido." : null;
  const validCnpj = (value) => !cnpjRegex.test(value) ? "CNPJ inválido." : null;
  const validPhone = (value) => value.length !== 11 ? "Telefone inválido." : null;
  const validBirthday = (value) => !value ? "Precisa ser menor que a data atual." : null;
  const validCompanyPhone = (value) => value.length !== 11 ? "Telefone inválido." : null;
  const validOpeningDate = (value) => !value ? "Precisa ser menor que a data atual." : null;
  const validPassword = (value) => value.length < 8 ? "Senha deve conter ao menos 8 caracteres." : null;
  
  return {
    required,
    validEmail,
    validCpf,
    validCnpj,
    validPhone,
    validBirthday,
    validCompanyPhone,
    validOpeningDate,
    validPassword
  }
}