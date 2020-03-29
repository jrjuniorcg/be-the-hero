# Be The Hero

A Semana Omnistack é uma maratona de desenvolvimento realizada pela empresa Rocketseta, ministrada pelo Diego Fernandes, no qual, desenvolvemos um projeto integrando o Back-end, Front-end e Mobile, tudo isso com a Stack do JS: Node JS, React JS e React Native. Essa semana, a versão 11 da Omnistack, desenvolvemos o "Be The Hero", nada mais é do que uma aplicação de cadastro de ONGS, com intuito de outras pessoas ajudarem em casos específicos com suas determinadas arrecadações.


# Instalação

## Pré-Requisitos 

```git, node, express, knex, sqlite, react, react-native, expo```

Clone o repositório, utilizando git clone ou faça o download do repositório.

Para iniciar o **Backend** do React utilize os comandos:
```
cd backend
npm install
npm start
```

Para iniciar o **Frontend** do React utilize os comandos:

```
cd frontend
npm install
npm start
```

Assim que o processo terminar, automaticamente será aberta no seu navegador a página ``localhost:3000`` contendo o Projeto em REACT.

Pro mobile, é o seguinte:

Para testar o **Mobile** do React Native, primeiro coloque o endereço de IP local, onde o Back-end está rodando, no arquivo src/services/api.js, e depois execute os comandos:

```
# NÃO é preciso executar a linha de baixo caso ja tenha o Expo (CLI) instalado!
npm global add install expo-cli
cd mobile
npm install
expo start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página ``localhost:19002``. Conecte seu emulador, ou teste o aplicativo por ``LAN``: baixe o aplicativo *Expo* da Play Store ou App Store e em seguida escaneie o código QR. (Se não for por lan, tente por tunnel, espere aparecer no Metro Blunder(informações do Expo sobre o app) a mensagem *Tunnel Ready* então clique em tunnel e escaneie o código QR.


