import styled from "styled-components";

export const SectionContainer = styled.section`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
