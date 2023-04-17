import styled from "styled-components";

export const BlackSkullContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 130px;
  gap: 20px;
  padding-top: 3rem;
  padding-bottom: 3rem;

  h4 {
    font-family: "Barlow", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: var(--white);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  ul a {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: var(--gray_primary);
    text-decoration: none;
  }
`;
