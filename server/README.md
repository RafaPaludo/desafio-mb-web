# Backend - Desafio MB Web

Este é o backend da aplicação do desafio técnico do Mercado Bitcoin. Desenvolvido com **Node.js** e **Express**, ele serve os arquivos estáticos do frontend e expõe uma rota de API para processar os dados do formulário.

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors) - (necessário para os testes locais)

## Executando o servidor

### Pré-requisitos

- Node.js instalado na máquina

### Passo a passo

1. Acesse a pasta do backend (a partir da pasta raiz do projeto):
   ```bash
   cd backend

2. Instale as dependências:
   ```bash
   npm install

3. Inicie o servidor:
   ```bash
   npm run dev

4. Acesse no navegador:
   ```bash
   http://localhost:3000


> O servidor irá:
> Servir o frontend em /
> Processar o formulário via POST /

## API - Rotas disponíveis

| Método | Rota | Descrição | 
| --- | --- | --- |
| GET | /registration | Retorna o HTML com o formulário |
| POST | /registration | Recebe os dados do formulário e processa |