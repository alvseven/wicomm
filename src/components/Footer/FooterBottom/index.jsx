import { FooterBottomContainer } from "./styles";

import wicommLogo from "../../../assets/wicommLogo.svg";
import vtexLogo from "../../../assets/vtexLogo.svg";

export const FooterBottom = () => {
  return (
    <FooterBottomContainer className="test">
      <p>Black Skull 2022. Todos os direitos reservados.</p>
      <div>
        <img src={wicommLogo} alt="wicomm logo" />
        <img src={vtexLogo} alt="vtex logo" />
      </div>
    </FooterBottomContainer>
  );
};
