import { Button } from "../../../components";

import chat from "../../../assets/chat.svg";

export const TalkWithUs = () => {
  return (
    <Button fontSize="0.8rem" letterSpacing="0" width="124px" height="40px">
      <img
        src={chat}
        alt="a image containing a message icon and a text that says talk with us"
      />
      Fale conosco
    </Button>
  );
};
