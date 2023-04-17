import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 6.5rem;
`;

export const NavAndMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: inherit;
  padding: 0 2rem;
  height: 4rem;
  background-color: var(--black);
`;
