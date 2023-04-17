import styled from "styled-components";

export const DefaultButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Barlow", sans-serif;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 800;
  color: var(--black);
  background-color: var(--orange_primary);
  border: 1px solid ${({ borderColor }) => borderColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: 0.5rem;
  letter-spacing: ${({ letterSpacing }) => letterSpacing};

  &:hover {
    background-color: var(--orange_secondary);
    border: 1px solid var(--orange_secondary);
  }
`;
