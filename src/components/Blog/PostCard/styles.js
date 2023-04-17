import styled from "styled-components";

export const Post = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 14px;
  width: 376px;
  height: 380px;
  border: 0.3px solid var(--dark_tertiary);

  &:hover {
    background-color: rgba(58, 58, 60, 0.3);
    transition: 0.5s;
  }

  img {
    object-fit: cover;
    transform: scale(0.991);
    transition: transform 0.3s ease-in-out;
    transform-origin: center center;
  }

  &:hover {
    img {
      transform: scale(1.01);
    }

    button {
      img {
        animation: behind-to-right 0.3s ease-out forwards;
      }
    }
  }

  span {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: var(--gray_secondary);
    padding-left: 1.5rem;
  }

  h4 {
    width: 80%;
    font-family: "Barlow", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: var(--white);
    padding-left: 1.5rem;
  }

  @keyframes behind-to-right {
    0% {
      right: 100%;
      opacity: 0;
    }
    100% {
      right: -35px;
      opacity: 1;
    }
  }

  button {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    margin-left: 1.5rem;

    img {
      opacity: 0;
      transition: ease-in-out 0.5ms;
      position: absolute;
    }
  }
`;
