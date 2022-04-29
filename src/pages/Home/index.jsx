import Lottie from "react-lottie";

import CardOne from "../../components/CardOne";
import CardTwo from "../../components/CardTwo";
import CardThree from "../../components/CardThree";
import CardFour from "../../components/CardFour";

import user from "../../assets/child.png";

import badgeAnimation from "../../assets/badge01.json";

import { Container } from "./styles";

export default function Home() {
  const badge = {
    loop: false,
    autoplay: true,
    animationData: badgeAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <div className="l-box">
        <div className="user-name">
          <img src={user} alt="" />
          <h1>Olá Sérgio!</h1>
        </div>
        <p>Seu plano para hoje</p>
        <CardOne name="Exemplo" />
        <div className="cards-control">
          <CardTwo name="Exemplo 2" />
          <CardThree name="Exemplo 3" />
        </div>
        <p>Treinamento</p>
        <CardFour name="Exemplo 4" />
      </div>
      <div className="r-box">
        <p>Progresso</p>
        <div className="badges">
          <div className="badge-animation">
            <Lottie
              options={badge}
              direction={1}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div className="badge-animation">
            <Lottie
              options={badge}
              direction={1}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div className="badge-animation">
            <Lottie
              options={badge}
              direction={1}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div className="badge-animation">
            <Lottie
              options={badge}
              direction={1}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
