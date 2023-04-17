import { AthleteInfoContainer } from "./styles";

import whiteArrowRight from "../../../assets/whiteArrowRight.svg";

export const AthleteInfo = ({ athleteId }) => {
  return (
    <AthleteInfoContainer className={`${athleteId}`}>
      <span className="athlete-name">CEDRIC MCMILLAN</span>
      <span className="more-info">
        MAIS INFORMAÇÃO
        <img src={whiteArrowRight} alt="an arrow pointing to right" />
      </span>
    </AthleteInfoContainer>
  );
};
