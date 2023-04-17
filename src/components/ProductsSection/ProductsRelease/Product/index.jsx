import { ActionContainer, ProductContainer } from "./styles";

import product from "../../../../assets/product2.svg";
import star from "../../../../assets/star.svg";
import shoppingCart from "../../../../assets/shoppingCart.svg";

export const Product = () => {
  return (
    <ProductContainer>
      <img src={product} alt="release product " />
      <ActionContainer>
        <img src={star} alt="wishlist icon" />
        <img src={shoppingCart} alt="shopping cart icon" />
      </ActionContainer>
    </ProductContainer>
  );
};
