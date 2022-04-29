import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6rem;

  .l-box {
    width: 100%;

    p {
      font-weight: 700;
      font-size: 1.6rem;
      margin: 2.5rem 0;
    }

    .cards-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;
      gap: 1rem;
    }
  }

  .r-box {
    width: 560px;

    p {
      font-weight: 700;
      font-size: 1.6rem;
      margin: 2.5rem 0;
    }

    .badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      .badge-animation {
        width: 158px;
        transition: transform 0.2s;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
