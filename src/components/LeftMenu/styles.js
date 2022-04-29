import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 95vh;

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 3.5rem;

    .logo {
      width: 70px;
      height: 70px;
      border-radius: 15px;
      background: #fff;
      margin: 2rem 0 0.7rem 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50px;
      }
    }

    h1 {
      color: #fff;
      font-size: 1.6rem;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    margin: 4rem auto;
    text-align: center;

    button {
      color: #fff;
      padding: 1rem 1rem 1rem 4rem;
      width: 200px;
      font-size: 1rem;
      border-radius: 0px 34px 34px 0px;
      transition: background 0.2s;

      &:hover {
        background: #4940b0;
      }
    }

    .active {
      border-radius: 0px 34px 34px 0px;
      background: #95d353;
      font-weight: 600;

      button {
        &:hover {
          background: #95d353;
        }
      }
    }
  }

  .progress-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #ebedf0;
    text-align: center;
    height: 320px;
    width: 175px;
    margin-left: 2.5rem;
    padding: 1rem;
    border-radius: 1rem;

    h2 {
      font-size: 1.2rem;
    }

    .progress {
      border: solid #6a5cf7 4px;
      background: #efedff;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      font-weight: 700;
    }

    p {
      font-size: 0.9rem;
    }

    .xp {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 0.4rem;

      .xp-animation {
        width: 50px;
      }

      p {
        font-weight: 800;
        font-size: 1rem;
        padding-top: 13px;
      }
    }
  }
`;
