import styled from "styled-components";

export const GoalsCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 277px;
  height: 340px;

  span {
    position: absolute;
    bottom: 0;
    font-family: "Barlow", sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 14px;
    height: 11%;
    width: 70%;
    padding: 0.5rem;
    background-color: var(--orange_primary);
    clip-path: polygon(0 0, 95% 0, 100% 0%, 90% 100%, 0 100%);
  }
`;
