import { Button } from "../../../components";

import { CashbackContainer } from "./styles";

import cashback from "../../../assets/cashback.svg";

export const CashbackCard = () => {
  return (
    <CashbackContainer>
      <div className="cashback-info-container">
        <h3>SEU DINHEIRO </h3>
        <span>DE VOLTA</span>
        <Button fontSize="14px" width="120px" height="40px">
          ENTENDA
        </Button>
      </div>
      <div className="cashback-image-container">
        <img src={cashback} alt="an icon of a coin" />
      </div>
    </CashbackContainer>
  );
};
