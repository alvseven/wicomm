import { Arrow, Button, AthleteCard } from "../../components";

import { GetToKnowUsContainer, ImagesContainer } from "./styles";

import getToKnowUs from "../../assets/getToKnowUs.svg";
import man from "../../assets/man.svg";
import woman from "../../assets/woman.svg";
import woman2 from "../../assets/woman2.svg";

export const GetToKnowUs = () => {
  return (
    <GetToKnowUsContainer backgroundImage={getToKnowUs}>
      <Arrow className="arrowLeft" direction="left" topDistance="235px" />
      <ImagesContainer>
        <h2>
          CONHEÇA A TROPA
          <span>BLACK SKULL</span>
        </h2>
        <div>
          <AthleteCard src={man} alt="a strong man picture" />
          <AthleteCard src={woman} alt="a woman with a gun" />
          <AthleteCard src={woman2} alt="a woman with a trophy" />
        </div>
        <Button width="139px" height="48px" fontSize="14px">
          VER TODOS
        </Button>
      </ImagesContainer>
      <Arrow className="arrowRight" direction="right" topDistance="235px" />
    </GetToKnowUsContainer>
  );
};
