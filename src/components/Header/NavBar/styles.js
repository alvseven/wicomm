import styled from "styled-components";

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3rem;
      position: relative;
      padding: 0.5rem;

      &:not(:first-child)::after {
        position: absolute;
        content: "";
        width: 0;
        height: 3px;
        left: 0;
        bottom: -3px;
        background-color: var(--orange_primary);
        transition: width 0.3s ease-out;
      }

      &:not(:first-child):hover::after {
        width: 100%;
      }
      &:not(:first-child):hover {
        background-color: rgba(255, 255, 255, 0.15);
        transition: 900ms;

        a {
          color: var(--white);
        }
      }
      a {
        font-family: "Barlow", sans-serif;
        font-size: 0.875rem;
        font-weight: 700;
        color: var(--gray_primary);
        text-align: center;
        text-decoration: none;
      }
    }
  }
`;
