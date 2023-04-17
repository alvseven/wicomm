import styled from "styled-components";

export const GoalsContainer = styled.section`
  width: 100%;
  height: 800px;
  padding-top: 3.5rem;

  .images-container {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 4rem;
  }

  .fee-and-cashback {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const Title = styled.h3`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 32px;
  margin-bottom: 1.5rem;
  text-align: center;
`;
