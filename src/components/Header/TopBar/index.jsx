import { Top } from "./styles";

import truck from "../../../assets/truck.svg";

export const TopBar = () => {
  return (
    <Top>
      <h3>FALE CONOSCO</h3>
      <div>
        <img
          src={truck}
          alt="truck icon representing truck icon representing free shipping on purchases over $199"
        />
        <span>FRETE GRÁTIS A PARTIR DE R$ 199,90 PARA TODO BRASIL</span>
      </div>
      <h3>BLOG.BLACKSKULL</h3>
    </Top>
  );
};
