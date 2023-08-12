const welcome = ({ name, token }) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bem Vindo a marvel</title>
    </head>
    <body>
      <h1>Olá ${name}</h1>
      <span>Seja bem vindo a nossa plataforma de seus herois favoritos</span>
    
      <a
       href="http://localhost:3000/activate/${token}">
      <h5>Seu Token de ativação é ${token}</h5>
    </body>
    </html>
    `
  }
  
  const forgotPassword = ({ name, link }) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Seja bem vindo a nossa plataforma de herois guarde eles em seu coraçao </title>
    </head>
    <body>
      <h1>Olá ${name}</h1>
      <span>Já que voce esqueceu sua senha, clique no link abaixo para resetar sua senha</span>
  
      <a href="${link}">
        <h5>Clique aqui para resetar sua senha</h5>
      </a>
    </body>
    </html>
    `
  }
  
  module.exports = { welcome, forgotPassword }