# Teste - Nuxt.js + Gulp.js

Teste de implementação com [Nuxt.js](https://nuxtjs.org/) e [Gulp](https://gulpjs.com/) para otimização de bundle.

## Desenvolvimento

Para desenvolvimento, o recomendado é colocar as imagens originais na pasta `source/img` e rodar o comando `npm run compress` para aplicar compressão nas mesmas. Depois disso, basta utilizar os arquivos .webp normalmente no código.

O servidor de desenvolvimento é executado com a task `npm run dev`, que executa um servidor para servir e recompilar os arquivos conforme forem modificados. O acesso é feito pelo endereço `localhost:3000`.

## Produção

Para fechar o pacote para produção, foi usado o comando `npm run generate` (que executa a task do Gulp para compressão de imagens), gerando os arquivos na pasta `dist/`.

A hospedagem foi feita utilizando o [Surge](https://surge.sh/). Instalado o pacote do surge, com `npm install surge --global`, basta rodar o comando `surge dist/` dentro da pasta do projeto e definir o endereço de hospedagem - funcionando tanto HTTP quanto HTTPS.

[Clique aqui para acessar.](http://atmonello-quiz.surge.sh)
