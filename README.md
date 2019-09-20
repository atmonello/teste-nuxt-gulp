# Teste - Nuxt.js + Gulp.js

Teste de implementação com [Nuxt.js](https://nuxtjs.org/) e [Gulp](https://gulpjs.com/) para otimização de bundle.

## Desenvolvimento

O servidor de desenvolvimento é executado com a task `npm run dev`, que executa um servidor para servir e recompilar os arquivos conforme forem modificados. O acesso é feito pelo endereço `localhost:3000`.

## Produção

Para fechar o pacote para produção, foi usado o comando `npm run generate` (que executa a task do Gulp para compressão de imagens), gerando os arquivos na pasta `dist/`.

A hospedagem foi feita utilizando o [GitHub Pages](https://pages.github.com/). Instalado o pacote [push-dir](https://www.npmjs.com/package/push-dir), com `npm install push-dir --save`, basta rodar o comando `npm run gh-pages` dentro da pasta do projeto.

## Compressão de imagens

As imagens são armazenadas na pasta `static`. Durante o desenvolvimento, pode-se usar as imagens não comprimidas.
Os comandos de build para produção executam o script do Gulp, que utiliza os pacotes **gulp-imagemin** e **gulp-imageminwebp** para comprimir as imagens PNG.


[Clique aqui para acessar.](https://atmonello.github.io/teste-nuxt-gulp/)
