import { GoalsCard } from "./GoalsCard";
import { FeeCard } from "./FeeCard";

import { GoalsContainer, Title } from "./styles";

import goals from "../../assets/goals.svg";
import goals2 from "../../assets/goals2.svg";
import goals3 from "../../assets/goals3.svg";
import goals4 from "../../assets/goals4.svg";
import { CashbackCard } from "./CashbackCard";

export const Goals = () => {
  return (
    <GoalsContainer>
      <Title>OBJETIVOS</Title>
      <div className="container">
        <div className="images-container">
          <GoalsCard
            src={goals}
            alt="a man doing exercise"
            label="GANHO DE MASSA"
          />
          <GoalsCard src={goals2} alt="a man doing exercise" label="ENERGIA" />
          <GoalsCard
            src={goals3}
            alt="a woman doing exercise"
            label="RECUPERAÇÃO MUSCULAR"
          />
          <GoalsCard
            src={goals4}
            alt="a woman with gym clothes"
            label="EMAGRECIMENTO"
          />
        </div>
        <div className="fee-and-cashback">
          <FeeCard />
          <CashbackCard />
        </div>
      </div>
    </GoalsContainer>
  );
};
