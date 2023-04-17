import { AboutUsContainer } from "./styles";

import aboutUs from "../../assets/aboutUs.svg";

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <img
        src={aboutUs}
        alt="about us text with a black skull logo in background"
      />
    </AboutUsContainer>
  );
};
