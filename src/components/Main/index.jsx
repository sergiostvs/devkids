import Lottie from "react-lottie";
import { Container } from "./styles";

import arrow from "../../assets/arrow.png";

import diamondAnimation from "../../assets/diamond.json";
import ringAnimation from "../../assets/ring.json";

export default function Main(props) {
  const xp = {
    loop: true,
    autoplay: true,
    animationData: diamondAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const ring = {
    loop: false,
    autoplay: true,
    animationData: ringAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <div className="header">
        <div className="alerts">
          <div className="ring-animation">
            <Lottie
              options={ring}
              direction={1}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <p>5</p>
        </div>
        <div className="xp">
          <div className="xp-animation">
            <Lottie
              options={xp}
              direction={1}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <p>90</p>
        </div>
        <div className="user">
          <p>Sérgio</p>
          <img src={arrow} alt="" />
        </div>
      </div>

      <div>{props.children}</div>
    </Container>
  );
}
