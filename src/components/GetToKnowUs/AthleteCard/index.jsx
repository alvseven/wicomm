import { AthleteCardContainer } from "./styles";

import whiteArrowRight from "../../../assets/whiteArrowRight.svg";

export const AthleteCard = ({ src, alt }) => {
  return (
    <AthleteCardContainer>
      <img src={src} alt={alt} />
      <div className="athlete-info">
        <span className="athlete-name">CEDRIC MCMILLAN</span>
        <span className="more-info">
          MAIS INFORMAÇÃO
          <img src={whiteArrowRight} alt="an arrow pointing to right" />
        </span>
      </div>
    </AthleteCardContainer>
  );
};
