import { GoalsCardContainer } from "./styles";

export const GoalsCard = ({ src, alt, label }) => {
  return (
    <GoalsCardContainer>
      <img src={src} alt={alt}></img>
      <span>{label}</span>
    </GoalsCardContainer>
  );
};
