import {
  SocialMedias,
  BlackskullInfo,
  Institutional,
  Affiliated,
  Newsletter,
} from "../../components";

import { FooterContainer, PaymentsContainer } from "./styles";

import payments from "../../assets/payment.svg";
import vtex from "../../assets/vtex.svg";
import certificate from "../../assets/certificate.svg";
import wicommLogo from "../../assets/wicommLogo.svg";
import vtexLogo from "../../assets/vtexLogo.svg";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <SocialMedias />
        <BlackskullInfo />
        <Institutional />
        <Affiliated />
        <Newsletter />
      </div>
      <PaymentsContainer>
        <div className="payments">
          <p>FORMAS DE PAGAMENTO</p>
          <img src={payments} alt="payment methods icons" />
        </div>
        <div className="security">
          <p>SEGURANÇA</p>
          <div>
            <img src={vtex} alt="vtex icon" />
            <img src={certificate} alt="security certificate icon" />
          </div>
        </div>
      </PaymentsContainer>
      <FooterBottom />
    </FooterContainer>
  );
};
