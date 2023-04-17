import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  background-color: var(--black);

  .container {
    display: flex;
    gap: 3rem;
    width: 100%;
    height: 100%;
    padding: 0 3rem;
  }

  .test {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3.5rem;
    width: 100%;
    height: 88px;
    border-top: 1px solid var(--dark_primary);
    background-color: var(--dark);

    p {
      font-family: "Barlow", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: var(--white);
    }

    div {
      display: flex;
      gap: 40px;
    }
  }
`;

export const PaymentsContainer = styled.div`
  position: absolute;
  bottom: 150px;
  left: 300px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 368px;

  .payments {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1.5rem;
    width: 202px;
    height: 56px;

    p {
      font-family: "Barlow", sans-serif;
      font-weight: 700;
      font-size: 16px;
      color: var(--white);
    }
  }

  .security {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1.5rem;
    width: 80px;
    height: 46px;
    p {
      font-family: "Barlow", sans-serif;
      font-weight: 700;
      font-size: 16px;
      color: var(--white);
    }

    div {
      display: flex;
      width: 118px;
      gap: 10px;
    }
  }
`;
