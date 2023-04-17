import styled, { css } from "styled-components";

export const ArrowButton = styled.button`
  position: absolute;
  top: ${({ topDistance }) => topDistance};
  width: 35px;
  height: 35px;
  background-color: var(--gray_secondary);
  border-radius: 4px;
  border: 1px solid var(--gray_secondary);
  ${({ to }) =>
    to === "right"
      ? css`
          right: 3%;
        `
      : css`
          left: 3%;
        `}
`;
