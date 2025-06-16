const BASE_URL = 'http://localhost:3000/registration';
const OPTIONS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * Envia os dados do formulário para validação no servidor.
 * 
 * @param {object} payload - Objeto com os dados do formulário.
 * @returns {Promise<object>} Uma Promise com a mensagem de resposta.
 */
export const postForm = async (payload = {}) => {
  try {
    const response = await fetch(BASE_URL, {
      ...OPTIONS,
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro ao enviar formulário.');
    }

    return { success: true, message: data.message };

  } catch (error) {
    return { success: false, message: error.message || 'Erro desconhecido' };
  }
};
