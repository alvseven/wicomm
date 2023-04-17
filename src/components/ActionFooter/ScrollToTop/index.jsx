import { ScrollButton } from "./styles";

import scrollToTop from "../../../assets/scrollToTop.svg";

export const ScrollToTop = () => {
  return (
    <ScrollButton>
      <img
        src={scrollToTop}
        alt="a icon that represents that if you click the page scroll up to top"
      />
    </ScrollButton>
  );
};
