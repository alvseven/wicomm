import styled from "styled-components";

export const GetToKnowUsContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 461px;
  margin-top: 300px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;

  .arrowLeft {
    left: 8%;
  }
  .arrowRight {
    right: 8%;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  h2,
  h2 > span {
    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 2.4rem;
  }

  h2 {
    align-self: flex-start;
    color: var(--white);
  }

  h2 > span {
    margin-left: 8px;
    color: var(--orange_primary);
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;

    div {
      &:hover {
        .athlete-info {
          width: 100%;
          opacity: 1;
          transition: 0.2s;
        }
      }
    }

    .athlete-info {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.8rem;
      bottom: 0;
      left: 0;
      height: 40%;
      width: 40%;
      background-color: rgba(58, 58, 60, 0.9);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;

      .athlete-name {
        font-family: "Barlow", sans-serif;
        font-style: italic;
        font-weight: 600;
        font-size: 17px;
        padding-left: 8px;
        color: var(--orange_primary);
      }
      .more-info {
        display: flex;
        align-items: center;
        gap: 4px;
        font-family: "Barlow", sans-serif;
        font-style: italic;
        font-weight: 600;
        font-size: 14px;
        padding-left: 8px;
        color: var(--white);
        text-align: center;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -25px;
    text-align: center;
    z-index: 2;
  }
`;
