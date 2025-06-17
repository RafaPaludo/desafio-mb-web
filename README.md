# Desafio MB Web

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-42b883?logo=vue.js)](https://vuejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue)](#)

## Preview

![Preview](https://github.com/RafaPaludo/desafio-mb-web/blob/master/.github/desafio-mb-web.gif)

---

## Sobre o projeto

Este projeto é uma solução para o desafio técnico proposto pelo Mercado Bitcoin, com o objetivo de demonstrar habilidades em desenvolvimento web fullstack.

A aplicação consiste em um formulário de cadastro de usuários, onde os dados são enviados via API para um servidor Node.js com Express.

Todos os requisitos do desafio podem ser consultados [neste link](https://github.com/mercadobitcoin/desafio-mb-web).

---

## Estrutura do projeto

O projeto é dividido em duas partes:

- **Frontend**  
  Desenvolvido com **Vue.js 3**, **Vite** e **Sass**. Responsável pela interface do formulário de cadastro.  
  Instruções específicas estão no [`frontend/README.md`](./frontend/README.md)

- **Backend**  
  Criado com **Node.js** e **Express**. Expõe uma API para receber os dados e também serve os arquivos estáticos do frontend.

---

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina.

### Passo a passo

1. Clone o repositório:
   ```bash
   git clone git@github.com:RafaPaludo/desafio-mb-web.git
   cd desafio-mb-web

2. Instale as dependências:
    ```bash
     npm install

3. Inicie o servidor:
     ```bash
     npm run start

4. Acesse a aplicação:
     ```bash
     http://localhost:3000

## Tecnologias utilizadas

### Frontend

Vuejs 3

Vite 

Sass

### Backend 

Node.js

Express

## API - Rotas disponíveis

| Método | Rota | Descrição | 
| --- | --- |
| GET | /registration | Retorna o HTML com o formulário |
| POST | /registration | Recebe os dados do formulário e processa |

> ⚠️ O backend serve o frontend automaticamente, sem necessidade de rodar os dois separadamente.