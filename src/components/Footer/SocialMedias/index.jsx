import { SocialMediasContainer } from "./styles";

import logo from "../../../assets/logo.svg";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import youtube from "../../../assets/youtube.svg";
import twitter from "../../../assets/twitter.svg";
import tiktok from "../../../assets/tiktok.svg";

export const SocialMedias = () => {
  return (
    <SocialMediasContainer>
      <img src={logo} alt="black skull logo" />
      <p>Nos siga:</p>
      <ul>
        <li>
          <a>
            <img src={facebook} alt="facebook icon" />
          </a>
        </li>
        <li>
          <a>
            <img src={instagram} alt="instagram icon" />
          </a>
        </li>
        <li>
          <a>
            <img src={youtube} alt="youtube icon" />
          </a>
        </li>
        <li>
          <a>
            <img src={twitter} alt="twitter icon" />
          </a>
        </li>
        <li>
          <a>
            <img src={tiktok} alt="tiktok icon" />
          </a>
        </li>
      </ul>
    </SocialMediasContainer>
  );
};
