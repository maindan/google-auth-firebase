
# Google Auth com Firebase

Buscando aprender como autenticar um usuário utilizando a sua conta google, criei esse projeto como forma de praticar o aprendizado e talvez ajudar algum outro estudante da área que esteja com dúvidas no assunto.

Gostaria de fazer um adendo para quem tem pouco conhecimento do assunto, não sou expert com sistemas de autenticação e esse projeto é puramente para fins acadêmicos, existem diversas outras formas de realizar autenticação e até outras bibliotecas que possam ser mais adequadas, como o OAuth2, o projeto em questão está utilizando o firebase do google (que é bem comum para uso em aplicações mobile e talvez seja mais útil caso esteja buscando essa aplicação) e recomendo que seja utilizado apenas para tirar alguma dúvida que possa ter em uma aplicação bem específica do firebase auth com Angular.


## Configurando firebase

Para utilizar esse projeto você precisará confirar sua conta google com o firebase, o primeiro link de referência possui um tutorial explicando como realizar essa configuração.
## Utilização do projeto

Após realizar a configuração do firebase, faça o clone desse repositório em seu computador.

#### Instalação de dependências

Abra o terminal na pasta principal do projeto e utilize o comando:
```
  npm install
```
e aguarde a instalação das dependências finalizar.

#### Configurar variáveis de ambiente

Para que esse projeto funcione você precisará configurar as variáveis de ambiente:
- crie um arquivo com o nome ".env" dentro da pasta src
- no arquivo crie duas variáveis:
```
GOOGLE_API_ID=com o valor da api_id da sua aplicação firebase 
API_KEY=com a api key da sua aplicação firebase
```

Você pode pular essa etapa adicionando os valores em questão diretamente dentro do arquivo environment.development.ts utilizando os mesmos nomes.

#### Buildando o projeto

Caso tenha criado as variáveis através de variáveis de ambiente, ao iniciar o projeto utilize o seguinte comando:
```
node -r dotenv/config node.js; ng s
```
Caso tenha passado os valores diretamente no environment ou no app.config.ts, utilize:
```
ng s
```


## Referência
 - [Angular 18 and Firebase](https://medium.com/@piotrkorowicki/angular-18-and-firebase-simplifying-user-authentication-a2c407370acc)
 - [Deploy Angular Project in vercel with secret environment](https://medium.com/@lara.delrio333/deploy-an-angular-project-in-vercel-with-secret-environment-variables-74323925712d)
 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

