import { Section, Product, Arrow } from "../../../components";

import { Title, ProductsReleaseList, ProductsListItem, Group } from "./styles";

import backgroundGroup from "../../../assets/backgroundGroup.svg";

export const ProductsRelease = ({ label }) => {
  return (
    <Section>
      <Title>{label}</Title>
      <Arrow direction="left" topDistance={"205px"} />
      <ProductsReleaseList>
        <ProductsListItem>
          <Product />
          <span className="product-name">
            WHEY ZERO(COM LACTOSE) BLACK SKULL - 900G
          </span>
          <span className="product-price">R$ 349,90</span>
          <span className="product-installments">ou 12x de R$ 29,16</span>
        </ProductsListItem>
        <ProductsListItem>
          <Product />
          <span className="product-name">
            WHEY ZERO(COM LACTOSE) BLACK SKULL - 900G
          </span>
          <span className="product-price">R$ 349,90</span>
          <span className="product-installments">ou 12x de R$ 29,16</span>
        </ProductsListItem>
        <ProductsListItem>
          <Product />
          <span className="product-name">
            WHEY ZERO(COM LACTOSE) BLACK SKULL - 900G
          </span>
          <span className="product-price">R$ 349,90</span>
          <span className="product-installments">ou 12x de R$ 29,16</span>
        </ProductsListItem>
        <ProductsListItem>
          <Product />
          <span className="product-name">
            WHEY ZERO(COM LACTOSE) BLACK SKULL - 900G
          </span>
          <span className="product-price">R$ 349,90</span>
          <span className="product-installments">ou 12x de R$ 29,16</span>
        </ProductsListItem>
      </ProductsReleaseList>
      <Arrow direction="right" topDistance={"205px"} />
      <Group
        src={backgroundGroup}
        alt="group indicating what image is being showed"
      />
    </Section>
  );
};
