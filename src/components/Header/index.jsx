import { TopBar, NavBar, MenuBar } from "../../components";

import { HeaderContainer, NavAndMenuContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <TopBar />
      <NavAndMenuContainer>
        <NavBar />
        <MenuBar />
      </NavAndMenuContainer>
    </HeaderContainer>
  );
};
