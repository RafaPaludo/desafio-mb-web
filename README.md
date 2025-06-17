# Desafio MB Web

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-42b883?logo=vue.js)](https://vuejs.org/)

## Preview

![Preview](https://github.com/RafaPaludo/desafio-mb-web/blob/master/.github/desafio-mb-web.gif)

---

## Sobre o projeto

Este projeto é uma solução para o desafio técnico proposto pelo Mercado Bitcoin, com o objetivo de demonstrar habilidades em desenvolvimento web fullstack.

A aplicação consiste em um formulário de cadastro de usuários, onde os dados são enviados via API para um servidor Node.js com Express.

Todos os requisitos do desafio podem ser consultados [neste link](https://github.com/mercadobitcoin/desafio-mb-web).

---

## Decisões de implementação

- Mantive os estilos globais em uma pasta separada e optei por utilizar estilos locais próximos ao código, dentro dos próprios componentes. Nomenclatura inspirada na metodologia [BEM](https://getbem.com/).

- Criei elementos de UI em uma pasta separada para facilitar a reutilização.

- Segui o [guia de estilos](https://vuejs.org/style-guide/) para estruturação dos componentes.

- Backend simplificado, com validações básicas e sem salvamento dos dados, conforme especificado no desafio.

- Adicionei algumas funcionalidades no formulário para guiar melhor usuário:
  1. Máscara nos campos de input (como CPF, CNPJ, telefone);
  2. Uso de placeholder;
  3. Ícone para mostrar/esconder a senha;
  4. Botão "Continuar" desabilitado enquanto houver campos obrigatórios não preenchidos.

- Como não consegui estilizar corretamente o componente de input[type="data"] nativo, optei por utilizar um campo texto normal. 

## Possíveis melhorias

- Validação mais robusta no backend.

- Adicionar regras mais específicas nos campos de input de acordo com regra de negócio. Exemplo: validar se cpf / cnpj existe.

- Criar um componente de data mais complexo e acessível, baseado ou não no input[type="date"] nativo.

- Adicionar transições mais fluídas, para melhorar a UX, como durante a exibição do componente de Toast e trocas de etapa.

---

## Estrutura do projeto

O projeto é dividido em duas partes:

- **Frontend**  
  Desenvolvido com **Vue.js 3**, **Vite** e **Sass**. Responsável pela interface do formulário de cadastro.  
  Instruções específicas estão no [`frontend/README.md`](./frontend/README.md)

- **Backend**  
  Criado com **Node.js** e **Express**. Expõe uma API para receber os dados e também serve os arquivos estáticos do frontend.
  Instruções específicas estão no [`server/README.md`](./server/README.md)

---

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina. Versão >= 18.

### Passo a passo

1. Clone o repositório:
   ```bash
   git clone git@github.com:RafaPaludo/desafio-mb-web.git
   cd desafio-mb-web

3. Faz o build do frontend e inicia o servidor:
     ```bash
     npm run start

4. Acesse a aplicação:
     ```bash
     http://localhost:3000

## API - Rotas disponíveis

| Método | Rota | Descrição | 
| --- | --- | --- |
| GET | /registration | Retorna o HTML com o formulário |
| POST | /registration | Recebe os dados do formulário e processa |

> ⚠️ O backend serve o frontend automaticamente, sem necessidade de rodar os dois separadamente.