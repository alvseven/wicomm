import { Button } from "../../../components";

import { Post } from "./styles";

import arrowSquareOut from "../../../assets/arrowSquareOut.svg";

export const PostCard = ({ src, alt }) => {
  return (
    <Post>
      <img src={src} alt={alt} />
      <span>03.05.21</span>
      <h4>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</h4>
      <Button width="138px" height="40px" fontSize="14px">
        LER MAIS
        <img
          src={arrowSquareOut}
          alt="an icon representing a redirect to the article"
        />
      </Button>
    </Post>
  );
};
