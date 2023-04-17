import { Menu, SearchContainer } from "./styles";

import search from "../../../assets/search.svg";
import user from "../../../assets/user.svg";
import star from "../../../assets/star.svg";
import cart from "../../../assets/cart.svg";

export const MenuBar = () => {
  return (
    <Menu>
      <SearchContainer>
        <input type="text" placeholder="Buscar" />
        <img src={search} alt="search icon" />
      </SearchContainer>
      <img src={user} alt="user profile icon" />
      <img src={star} alt="wishlist icon" />
      <img src={cart} alt="shopping cart icon" />
    </Menu>
  );
};
