import styled from "styled-components";

export const MainContainer = styled.main`
  position: relative;
  width: 100%;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 548px;

  img {
    position: absolute;
    bottom: 6.2%;
    left: 44.5%;
  }
`;

export const TextAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  top: 54%;
  left: 34%;
  transform: translate(-50%, -50%);
  width: 46%;
  height: 18rem;
  background-color: transparent;
  h1,
  h1 > span {
    display: block;
    font-family: "Roboto Condensed", sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: 3.2rem;
    letter-spacing: 0.04em;
  }

  h1 {
    color: var(--white);
  }

  span {
    color: var(--orange_primary);
  }

  p {
    width: 59%;
    font-family: "Barlow", sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 1rem;
    color: var(--white);
  }

  button {
    margin-top: 12px;
    padding: 14px 24px;
  }
`;
