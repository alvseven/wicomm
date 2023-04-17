import { Button } from "../../../../../components";

import { BuyContainer, SizeContainer, ColorsContainer } from "./styles";

export const Options = ({ option }) => {
  return (
    <BuyContainer>
      <p>TAMANHO</p>
      <SizeContainer></SizeContainer>
      <ColorsContainer></ColorsContainer>
      <Button>COMPRAR</Button>
    </BuyContainer>
  );
};
