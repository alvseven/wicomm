import styled from "styled-components";

export const SocialMediasContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 130px;
  width: 20%;
  padding-top: 3rem;

  p {
    font-family: "Barlow";
    font-weight: 400;
    font-size: 14px;
    color: var(--white);
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 1.25rem;
  }

  ul {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 12px;
  }
`;
