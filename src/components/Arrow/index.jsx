import { ArrowButton } from "./styles";

import arrowRight from "../../assets/arrowRight.svg";
import arrowLeft from "../../assets/arrowLeft.svg";

export const Arrow = ({ className = "", direction, topDistance = "110px" }) => {
  const arrow = direction === "right" ? arrowRight : arrowLeft;

  return (
    <ArrowButton className={className} to={direction} topDistance={topDistance}>
      <img src={arrow} alt={`icon of an arrow pointing to ${direction}`} />
    </ArrowButton>
  );
};
