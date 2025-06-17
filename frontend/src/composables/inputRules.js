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
    const valueSplitted = value.split('/');
    const day = valueSplitted[0] || "";
    const month = valueSplitted[1] || "";
    const year = valueSplitted[2] || "";

    if (day < 1 || day > 31) return "Revise o dia informado.";
    if (month < 1 || month > 12) return "Revise o mês informado.";
    if (year.length < 4) return "Revise o ano informado.";

    const shortISODateFormat = `${year}-${month}-${day}`;
    const dateValue = new Date(shortISODateFormat);

    if (dateValue.toString() === "Invalid Date") return "Data inválida";

    const dateNow = new Date().setHours(0,0,0,0) - (3 * 60 * 60* 1000); // Data da virada de hoje, menos as 3hrs de UTC.

    return dateValue.getTime() >= dateNow ? "Precisa ser menor que a data atual." : null;
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