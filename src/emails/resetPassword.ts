export const resetPassword = (token: string, name: string) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
  <title>Document</title>
</head>
<body style="font-family: 'Open Sans', sans-serif; color: #6B705C; margin: 0; ">
  <div style="width: 90%; max-width: 1024px; height: 100%; margin: auto;">
    <div style="display: flex; width: 100%; margin-top: 2rem;">
      <h1 style="font-size: 2rem; font-weight: 200; color: #CB997E;">Florista Beijaflor</h1>

      <img style="margin-left: auto;" height="100" width="100" src="https://floristabeijaflor.com/logo-with-letters.png" alt="logo">
    </div>
    <h2 style="font-weight: 400; color: #6B705C;">Olá ${name},</h2>
    <p style="font-weight: 400; margin-left: 1rem; margin-top: 0; margin-bottom: 4rem; color: #6B705C;">Recebemos um pedido de reposição da palavra-passe. Clica no link em baixo para definir uma nova palavra-passe:</p>
    <a style="text-decoration: none;" href=${process.env.ORIGIN}/redefinir-palavra-passe/${token}>
      <div style="display: flex; width: 16rem; height: 4rem; margin: 0 auto; background-color: #F5FAE8; border-radius: 4px; border: 1px solid #A5A58D;">
        <p style="margin: auto; color: #6B705C; letter-spacing: 0.1rem;">Definir nova palavra-passe</p>
      </div>
    </a>
    <p style="font-weight: 400; margin-left: 1rem; margin-top: 6rem;margin-bottom: 10rem; color: #6B705C;">Se não foi o/a ${name} que fez o pedido, simplesmente ignore este email. Obrigado!</p>
  </div>
  <div style="background-color: #F5FAE8; margin-top: 10rem; padding: 1rem; max-width: 1024px; margin:auto">
  <div style="border-bottom: 1px solid #6B705C;">
    <img style="margin-left: 1rem;" height="100" width="100" src="https://floristabeijaflor.com/logo-with-letters.png" alt="logo">
  </div>
  <div style="display: flex; width: 97%; padding: 3rem 0.5rem 0 0.5rem;">
    <div style="display: flex; width: 50%;">
      <div style="width: 50%;">
        <div style="margin-bottom: 0.5rem;">
          <a style="color: #6B705C;" href="https://floristabeijaflor.com">Início</a>
        </div>
        <div style="margin-bottom: 0.5rem;">
          <a style="color: #6B705C;" href="https://floristabeijaflor.com/explorar">Explorar</a>
        </div>
        <div style="margin-bottom: 0.5rem;">
          <a style="color: #6B705C;" href="https://floristabeijaflor.com/explorar/plantas">Plantas</a>
        </div>
        <div>
          <a style="color: #6B705C;" href="https://floristabeijaflor.com/explorar/flores">Flores</a>
        </div>
      </div>
      <div style="width: 50%;">
        <div style="margin-bottom: 0.5rem;">
          <a style="color: #6B705C;" href="https://floristabeijaflor.com/login">Login</a>
        </div>
        <div style="margin-bottom: 0.5rem;">
          <a style="color: #6B705C;" href="https://floristabeijaflor.com/sobre">Sobre nós</a>
        </div>
        <div style="margin-bottom: 0.5rem;">
          <a style="color: #6B705C;" href="https://floristabeijaflor.com/condicoes">Condições gerais</a>
        </div>
        <div>
          <a style="color: #6B705C;" href="https://floristabeijaflor.com/ajuda">Perguntas frequentes</a>
        </div>
      </div>
    </div>
    <div style="width: 50%;">
      <p style="margin: 0; color: #6B705C;">Florista Beijaflor,</p>
      <p style="padding-right: 1rem; color: #6B705C;">Avenida Gil Eanes Mercado de Rio de Mouro, loja 4, 2635-003 Rio de Mouro</p>
      <p style="padding-right: 1rem; margin-top: 4rem; margin-bottom: 0; font-size: 0.8rem; text-align: right; color: #6B705C;">Copyright © 2021 Florista Beijaflor
        Todos os direitos reservados</p>
    </div>
  </div>
  </div>
</body>
</html>`
