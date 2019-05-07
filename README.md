# person-list-frontend

Projeto para apresentar uma lista de pessoas a partir de um backend REST.

* Frontend em AngularJS
* Layout sem tabelas
* Aplicação responsiva em tamanhos de tela full HD, HD e Wide VGA
* Backend em Node.js
* SASS e Minificação através de webpack
* Aplicação frontend desenvolvida com base em [angular-seed](https://github.com/angular/angular-seed)

Instruções para execução (necessário ter [node](https://nodejs.org/en/download/) instalado).

Para iniciar o backend:

```
git clone https://github.com/wpiasecki/person-list-backend.git
cd person-list-backend
npm i
node index.js
```

Para iniciar o frontend:

```
git clone https://github.com/wpiasecki/person-list-frontend.git
cd person-list-frontend
npm i
npm i webpack -g

# para versão minificada utilizar a flag '-p'
webpack

npm start
```

Acessar o sistema em http://localhost:8000.

![list](https://raw.githubusercontent.com/wpiasecki/person-list-frontend/master/prints/1list.png)
