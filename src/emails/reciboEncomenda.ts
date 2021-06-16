export const reciboEncomenda = (
  name: string,
  orderId: string,
  date: string,
  cardDetails: string,
  priceDetails: string,
  subtotal: string,
  ivaPrice: string,
  price: string
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
    <div style="width: 100%; max-width: 1024px; height: 100%; margin: auto">
      <div style="display: flex; width: 90%; margin: auto; margin-top: 2rem">
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
      <h2 style="font-weight: 400; color: #6b705c; margin-left: 1rem;">
        Olá ${name}, obrigado pela sua encomenda!
      </h2>
      <h3
        style="
          font-weight: 400;
          margin-left: 1.5rem;
          margin-top: 0;
          color: #6b705c;
        "
      >
        Aqui está o respetivo recibo:
      </h3>
      <div style="max-width: 500px; margin: auto">
        <h3 style="text-align: right; margin-right: 0.5rem;">Total: €${price}</h3>
      </div>
      <div
        style="
          width: full;
          max-width: 500px;
          margin: 4rem auto;
          padding: 2rem;
          border: 1px solid #b8b8b8;
          color: #5c5c5c;
        "
      >
        <div style="border-bottom: 1px solid #cacaca">
          <h2 style="font-weight: 700; margin-left: 0.5rem">ID da encomenda</h2>
          <h4 style="font-weight: 400; margin-left: 1.5rem">${orderId}</h4>
        </div>
        <div style="border-bottom: 1px solid #cacaca">
          <h2 style="font-weight: 700; margin-left: 0.5rem">
            Data de pagamento
          </h2>
          <h4 style="font-weight: 400; margin-left: 1.5rem">${date}</h4>
        </div>
        <div style="border-bottom: 1px solid #cacaca">
          <h2 style="font-weight: 700; margin-left: 0.5rem">Pagamento</h2>
          <h4 style="font-weight: 400; margin-left: 1.5rem">${cardDetails}</h4>
        </div>
        <div style="border-bottom: 1px solid #cacaca">
          <h2 style="font-weight: 700; margin-left: 0.5rem">
            Detalhes do preço
          </h2>
          ${priceDetails}
        </div>
        <div style="border-bottom: 1px solid #cacaca">
          <h2 style="font-weight: 700; margin-left: 0.5rem">Subtotal (EUR)</h2>
          <h4 style="font-weight: 400; margin-left: 1.5rem">€ ${subtotal}</h4>
        </div>
        <div style="border-bottom: 1px solid #cacaca">
          <h2 style="font-weight: 700; margin-left: 0.5rem">IVA (23%)</h2>
          <h4 style="font-weight: 400; margin-left: 1.5rem">€ ${ivaPrice}</h4>
        </div>
        <div>
          <h2 style="font-weight: 700; margin-left: 0.5rem">Total (EUR)</h2>
          <h4 style="font-weight: 700; margin-left: 1.5rem">€ ${price}</h4>
        </div>
      </div>
    </div>
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
      <div style="display: flex; width: 97%; padding: 3rem 0.5rem 0 0.5rem">
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
