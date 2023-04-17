import styled from "styled-components";

export const ScrollButton = styled.button`
  background-color: var(--dark_tertiary);
  border: 1px solid var(--gray_primary);
  border-radius: 4px;
  width: 3.5rem;
  height: 3.5rem;

  &:hover {
    background-color: var(--orange_primary);

    img {
      filter: brightness(-100%);
    }
  }
`;
