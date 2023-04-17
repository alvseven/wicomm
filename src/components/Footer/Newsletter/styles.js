import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 300px;
  height: 100%;
  padding-top: 3rem;
  padding-left: 2rem;
  padding-bottom: 3rem;
  border-left: 1px solid var(--dark_primary);

  h3,
  span {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 32px;
  }

  h3 {
    color: var(--white);
  }
  span {
    color: var(--orange_primary);
    margin-bottom: 16px;
  }

  p {
    font-family: "Barlow";
    font-weight: 400;
    font-size: 14px;
    color: var(--gray_primary);
    margin-bottom: 24px;
  }

  input {
    width: 256px;
    height: 56px;
    background-color: var(--dark_primary);
    border: 1px solid var(--dark_tertiary);
    border-radius: 4px;
    padding-left: 16px;
    color: var(--white);
    margin-top: 8px;
    outline: none;
  }

  input::placeholder {
    font-family: "Barlow";
    font-weight: 500;
    font-size: 12px;
    color: var(--gray_primary);
  }

  input:focus,
  input:hover {
    background-color: var(--dark_secondary);
  }

  button {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 24px;
  }
`;
