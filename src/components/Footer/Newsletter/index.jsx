import { Button } from "../../../components";

import { Form } from "./styles";

export const Newsletter = () => {
  return (
    <Form>
      <h3>FIQUE POR</h3>
      <span>DENTRO</span>
      <p>
        Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e
        muito mais!
      </p>

      <input type="text" placeholder="Digite seu nome" />
      <input type="email" placeholder="Digite seu e-mail" />

      <Button width="138px" height="40px" fontSize="15px">
        ENVIAR
      </Button>
    </Form>
  );
};
