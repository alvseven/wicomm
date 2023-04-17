import styled from "styled-components";

export const Title = styled.h3`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 32px;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ProductsReleaseList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const ProductsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 273px;
  height: 341px;
  padding: 1rem 0.5rem 1.375rem 1.5rem;
  border: 0.1px solid #ffffff;

  .product-name {
    width: 73%;
    font-family: "Barlow", sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: var(--black);
    margin-bottom: 2rem;
    text-align: left;
  }
  .product-price {
    font-family: "Barlow", sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: var(--orange_primary);
    margin-bottom: 0.5rem;
    text-align: left;
  }
  .product-installments {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: var(--dark_tertiary);
    text-align: left;
  }
`;

export const Group = styled.img`
  position: absolute;
  padding-top: 4rem;
  bottom: 50;
  left: 44.5%;
`;
