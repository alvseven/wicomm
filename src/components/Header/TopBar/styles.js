import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  height: 2.5rem;
  background-color: var(--dark_primary);

  h3:first-child {
    margin-left: 8px;
  }

  h3 {
    font-family: "Barlow", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--orange_primary);
    padding: 0 2rem;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;

    span {
      font-family: "Barlow", sans-serif;
      font-size: 0.625rem;
      font-weight: 500;
      color: var(--gray_secondary);
      padding-right: 2rem;
    }
  }
`;
