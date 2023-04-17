import { Nav } from "./styles";

import logo from "../../../assets/logo.svg";

export const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <img src={logo} alt="black skull logo" />
        </li>
        <li>
          <a href="">CATEGORIAS</a>
        </li>
        <li>
          <a href="">VESTUÁRIO</a>
        </li>
        <li>
          <a href="">OBJETIVOS</a>
        </li>
        <li>
          <a href="">PROMOÇÕES</a>
        </li>
        <li>
          <a href="">ATLETAS</a>
        </li>
        <li>
          <a href="">ASSINATURA</a>
        </li>
      </ul>
    </Nav>
  );
};
