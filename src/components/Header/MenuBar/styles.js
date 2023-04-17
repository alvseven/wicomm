import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  img {
    &:hover {
      filter: brightness(150%);
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2.3rem;
  padding-left: 0.9rem;
  padding-right: 0.5rem;
  background-color: var(--dark_primary);
  border: 1px solid var(--dark_tertiary);
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  input {
    all: unset;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--gray_primary);
    height: inherit;
    padding-right: 0.2rem;
    border: none;

    &::placeholder {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 0.75rem;
      color: var(--gray_primary);
    }
  }
`;
