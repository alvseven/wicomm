import { Arrow, ProductCard as Product } from "../../../components";

import { ProductsNavContainer, ProductsList } from "./styles";

export const ProductsNav = () => {
  return (
    <ProductsNavContainer>
      <Arrow direction="left" />
      <ProductsList>
        <Product label={"PROTEÍNAS"} />
        <Product label={"HIPERCALÓRICOS"} />
        <Product label={"CREATINA"} />
        <Product label={"PACKS"} />
        <Product label={"AMINOÁCIDOS"} />
        <Product label={"SAÚDE"} />
      </ProductsList>
      <Arrow direction="right" />
    </ProductsNavContainer>
  );
};
