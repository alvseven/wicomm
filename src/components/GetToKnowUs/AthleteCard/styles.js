import styled from "styled-components";

export const AthleteCardContainer = styled.div`
  &:hover {
    .athlete-info {
      width: 100%;
      opacity: 1;
      transition: 0.2s;
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
`;
