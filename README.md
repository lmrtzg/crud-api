# CRUD-API

Uma API básica para realização de operações CRUD (Create, Read, Update and Delete) que tenta seguir os princípios do SOLID.

## Ferramentas utilizadas
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](http://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [uuid](https://www.npmjs.com/package/uuid)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [ts-node](https://www.npmjs.com/package/ts-node)

## Comandos

Após clonar o repositório, definir a variável de conexão do banco de dados instalar as dependências, você pode:

*Realizar o build:*
```
npm run build
```

*Rodar aplicação localmente (após a realização do build):*
```
npm run start
```

*Rodar aplicação localmente (sem realizar o build):*
```
npm run dev
```

*Rodar testes:*
```
npm run test
```
----
### Importante
Antes de rodar localmente, você precisa fornecer uma URL de um banco de dados MongoDB.

 Você pode fazer isso criando uma arquivo ` .env` e criando a seguinte variável:
```
 DB=SUA URL
```
----