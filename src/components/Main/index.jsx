import { Button } from "../../components";

import { MainContainer, TextAndButtonContainer } from "./styles";

import background from "../../assets/background.svg";
import backgroundGroup from "../../assets/backgroundGroup.svg";

export const Main = () => {
  return (
    <MainContainer backgroundImage={background}>
      <TextAndButtonContainer>
        <h1>
          AJUDANDO VOCÊ A TER
          <span>MAIS PERFORMANCE</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadispscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
        <Button width="132px">CONFIRA</Button>
      </TextAndButtonContainer>
      <img
        src={backgroundGroup}
        alt="group indicating what image is being showed"
      />
    </MainContainer>
  );
};
