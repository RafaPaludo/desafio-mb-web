export function useInputRules () {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
  const phoneRegex = /^\([1-9]{2}\) 9 [0-9]{4}\-[0-9]{4}$/;
  const companyPhoneRegex = /^\([1-9]{2}\) ([2-8])[0-9]{3}\-[0-9]{4}$/;

  const required = (value) => !String(value).length ? "Campo obrigatório" : null;
  const validEmail = (value) => !emailRegex.test(value) ? "E-mail inválido." : null;
  const validCpf = (value) => !cpfRegex.test(value) ? "CPF inválido." : null;
  const validCnpj = (value) => !cnpjRegex.test(value) ? "CNPJ inválido." : null;
  const validPhone = (value) => !phoneRegex.test(value) ? "Telefone inválido." : null;
  const validCompanyPhone = (value) => !companyPhoneRegex.test(value) ? "Telefone inválido." : null;
  const validPassword = (value) => value.length < 8 ? "Senha deve conter ao menos 8 caracteres." : null;

  const validBirthday = (value) => {
    const dateNow = new Date().setHours(0,0,0,0) - (3 * 60 * 60* 1000); // Data da virada de hoje, menos as 3hrs de UTC.
    const dateValue = new Date(value).getTime();

    return dateValue >= dateNow ? "Precisa ser menor que a data atual." : null;
  }
  const validOpeningDate = validBirthday;
  
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