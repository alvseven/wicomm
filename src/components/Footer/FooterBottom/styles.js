import styled from "styled-components";

export const FooterBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3.5rem;
  width: 100%;
  height: 88px;
  border-top: 1px solid var(--dark_primary);
  background-color: var(--dark);

  p {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: var(--white);
  }

  div {
    display: flex;
    gap: 40px;
  }
`;
