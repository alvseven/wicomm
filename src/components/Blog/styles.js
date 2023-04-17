import styled from "styled-components";

export const BlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 540px;
  margin-top: 100px;
  padding: 3.5rem;
  background: linear-gradient(180deg, #3a3a3c 0%, #0b0b0b 101.48%);

  div {
    display: flex;
    align-content: flex-end;
    justify-content: space-between;
    width: 100%;
    height: 40px;

    h3,
    h3 span {
      font-family: "Roboto Condensed", sans-serif;
      font-weight: 700;
      font-style: italic;
      font-size: 32px;
    }

    h3 {
      color: var(--white);
    }
    h3 span {
      color: var(--orange_primary);
      margin-left: 8px;
    }

    button {
      display: flex;
      align-content: center;
      justify-content: center;
    }
  }
`;

export const PostsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 380px;
  gap: 20px;
`;
