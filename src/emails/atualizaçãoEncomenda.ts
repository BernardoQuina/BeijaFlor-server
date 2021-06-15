export const atualizaçãoEncomenda = (
  orderId: string,
  name: string,
  state: string,
  stateDiagram: string,
  addressName: string,
  address: string
) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <title>Document</title>
  </head>
  <body style="font-family: 'Open Sans', sans-serif; color: #6b705c; margin: 0">
    <div style="width: 90%; max-width: 1024px; height: 100%; margin: auto">
      <div style="display: flex; width: 100%; margin-top: 2rem">
        <h1 style="font-size: 2rem; font-weight: 200; color: #cb997e">
          Florista Beijaflor
        </h1>

        <img
          style="margin-left: auto"
          height="100"
          width="100"
          src="https://floristabeijaflor.com/logo-with-letters.png"
          alt="logo"
        />
      </div>
      <h2 style="font-weight: 400; color: #6b705c">
        Olá ${name}, o estado da sua encomenda foi atualizado!
      </h2>
      <h3
        style="
          font-weight: 400;
          margin-left: 1rem;
          margin-top: 0;
          color: #6b705c;
        "
      >
        A sua encomenda com ID <strong>${orderId}</strong> está agora ${state}. Enviaremos um email assim que mude de estado.
      </h3>
      <div style="display: flex; width: 90%; max-width: 800px; height: 80px; border: 1px solid #c5c5c5; border-radius: 6px; margin: 5rem auto; padding: 1rem;">
        ${stateDiagram}
      </div>
      <h3
      style="
        font-weight: 400;
        margin-left: 1rem;
        color: #6b705c;
      "
    >
      Para ser entregue a <strong>${addressName}</strong>, em:
    </h3>
    <h4 style="font-weight: 400; margin: 1rem 0px 4rem 2rem; color: #6B705C">
      ${address}
    </h4>
    <h3
      style="
        font-weight: 400;
        margin-left: 1rem;
        color: #6b705c;
      "
    >
      Depois de fazer login pode fazer o seguimento das suas encomendas aqui:
      </h3>
      <a style="text-decoration: none;" href=${process.env.ORIGIN}/conta/encomendas>
        <div style="display: flex; width: 16rem; height: 4rem; margin: 3rem auto 10rem auto; background-color: #F5FAE8; border-radius: 4px; border: 1px solid #A5A58D;">
          <p style="margin: auto; color: #6B705C; letter-spacing: 0.1rem;">As minhas encomendas</p>
        </div>
      </a>
    <div
      style="
        background-color: #f5fae8;
        margin-top: 10rem;
        padding: 1rem;
        max-width: 1024px;
        margin: auto;
      "
    >
      <div style="border-bottom: 1px solid #6b705c">
        <img
          style="margin-left: 1rem"
          height="100"
          width="100"
          src="https://floristabeijaflor.com/logo-with-letters.png"
          alt="logo"
        />
      </div>
      <div style="display: flex; width: 97%; padding: 3rem 1rem 0 1rem">
        <div style="display: flex; width: 50%">
          <div style="width: 50%">
            <div style="margin-bottom: 0.5rem">
              <a style="color: #6b705c" href="https://floristabeijaflor.com"
                >Início</a
              >
            </div>
            <div style="margin-bottom: 0.5rem">
              <a
                style="color: #6b705c"
                href="https://floristabeijaflor.com/explorar"
                >Explorar</a
              >
            </div>
            <div style="margin-bottom: 0.5rem">
              <a
                style="color: #6b705c"
                href="https://floristabeijaflor.com/explorar/plantas"
                >Plantas</a
              >
            </div>
            <div>
              <a
                style="color: #6b705c"
                href="https://floristabeijaflor.com/explorar/flores"
                >Flores</a
              >
            </div>
          </div>
          <div style="width: 50%">
            <div style="margin-bottom: 0.5rem">
              <a
                style="color: #6b705c"
                href="https://floristabeijaflor.com/login"
                >Login</a
              >
            </div>
            <div style="margin-bottom: 0.5rem">
              <a
                style="color: #6b705c"
                href="https://floristabeijaflor.com/sobre"
                >Sobre nós</a
              >
            </div>
            <div style="margin-bottom: 0.5rem">
              <a
                style="color: #6b705c"
                href="https://floristabeijaflor.com/condicoes"
                >Condições gerais</a
              >
            </div>
            <div>
              <a
                style="color: #6b705c"
                href="https://floristabeijaflor.com/perguntas"
                >Perguntas frequentes</a
              >
            </div>
          </div>
        </div>
        <div style="width: 50%">
          <p style="margin: 0; color: #6b705c">Florista Beijaflor,</p>
          <p style="padding-right: 1rem; color: #6b705c">
            Avenida Gil Eanes Mercado de Rio de Mouro, loja 4, 2635-003 Rio de
            Mouro
          </p>
          <p
            style="
              padding-right: 1rem;
              margin-top: 4rem;
              margin-bottom: 0;
              font-size: 0.8rem;
              text-align: right;
              color: #6b705c;
            "
          >
            Copyright © 2021 Florista Beijaflor Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
`
