import { ProductContainer } from "./styles";

import product from "../../../../assets/product.svg";

export const ProductCard = ({ label }) => {
  return (
    <ProductContainer>
      <a>
        <div>
          <img src={product} alt="product image" />
        </div>
        <span>{label}</span>
      </a>
    </ProductContainer>
  );
};
