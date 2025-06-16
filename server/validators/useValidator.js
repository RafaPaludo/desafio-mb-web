const validateUser = (body = {}) => {
  const commonFields = [
    {
      property: "email",
      name: "E-mail",
      typeof: "string",
      length: 1
    },
    {
      property: "password",
      name: "Senha",
      typeof: "string",
      length: 8
    },
    {
      property: "selectedPersonType",
      name: "Tipo de pessoa",
      typeof: "string",
      length: 2
    }
  ];
  const fieldsModel = {
    pf: [
      ...commonFields,
      {
        property: "name",
        name: "Nome",
        typeof: "string",
        length: 1
      },
      {
        property: "cpf",
        name: "CPF",
        typeof: "string",
        length: 11
      },
      {
        property: "birthday",
        name: "Data de nascimento",
        typeof: "string",
        length: 10
      },
      {
        property: "phone",
        name: "Telefone",
        typeof: "string",
        length: 11
      }
    ],
    pj: [
      ...commonFields,
      {
        property: "companyName",
        name: "Nome da empresa",
        typeof: "string",
        length: 1
      },
      {
        property: "cnpj",
        name: "CNPJ",
        typeof: "string",
        length: 14
      },
      {
        property: "openingDate",
        name: "Data de abertura",
        typeof: "string",
        length: 10
      },
      {
        property: "companyPhone",
        name: "Telefone da empresa",
        typeof: "string",
        length: 10
      }
    ]
  };
  const selectedPersonType = body?.selectedPersonType?.toLowerCase();
  const fields = fieldsModel[selectedPersonType];

  if (!fields) throw new Error("Tipo de usuário não informado. Revise os campos e tente novamente.");

  const malformedFields = fields.reduce((acc, field) => {
    if (
      !body.hasOwnProperty(field.property) ||
      typeof body[field.property] !== field.typeof ||
      body[field.property].trim().length < field.length
    ) acc.push(field.name);

    return acc;
  }, []).join(", ");
  
  if (malformedFields) {
    throw new Error(`Os seguintes campos não foram preenchidos corretamente: ${malformedFields}.`);
  }

  return { ok: true };
};

module.exports = validateUser;