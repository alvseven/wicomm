import styled from "styled-components";

export const FeeContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 20px;
  width: 475px;
  height: 260px;
  background: linear-gradient(213.8deg, #9a9a9a -17.86%, #0b0b0b 73%);

  &:hover {
    img {
      transform: translateY(-80px) rotate(60deg);
      transition: 0.4s;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;

    h3,
    span {
      font-family: "Roboto Condensed", sans-serif;
      font-weight: 700;
      font-style: italic;
      font-size: 40px;
    }

    h3 {
      color: var(--white);
    }
    span {
      color: var(--orange_primary);
    }

    button {
      display: flex;
      align-content: center;
      justify-content: center;
      margin-top: 2rem;
    }
  }

  .image-container {
    align-self: flex-end;
  }

  img {
    width: 135px;
    height: 150px;
  }
`;
