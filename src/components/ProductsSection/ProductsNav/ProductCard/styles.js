import styled from "styled-components";

export const ProductContainer = styled.li`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 192px;
  height: 198px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 158px;
    height: 100%;
    text-decoration: none;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: rgba(202, 202, 202, 0.4);
      border: 2px solid transparent;
      border-radius: 100%;

      &:hover {
        background-color: var(--orange_primary);
        border: 5px solid var(--orange_secondary);
        img {
          transition: transform 0.3s ease;
          transform: scale(1.4);
        }
      }
    }

    span {
      font-family: "Barlow", sans-serif;
      font-weight: 700;
      font-size: 12px;
      text-align: center;
    }
  }
`;
