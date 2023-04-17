import { Button } from "../../../components";

import { FeeContainer } from "./styles";

import packageBox from "../../../assets/packageBox.svg";

export const FeeCard = () => {
  return (
    <FeeContainer>
      <div className="info-container">
        <h3>GARANTA O </h3>
        <span>FRETE GRÁTIS</span>
        <Button fontSize="14px" width="120px" height="40px">
          CONSULTE
        </Button>
      </div>
      <div className="image-container">
        <img src={packageBox} alt="an icon of a package box" />
      </div>
    </FeeContainer>
  );
};
