import Lottie from "react-lottie";

import { Container } from "./styles";
import animationData from "../../assets/progress.json";
import diamondAnimation from "../../assets/diamond.json";

import logo from "../../assets/logo.png";

export default function LeftMenu(props) {
  const progress = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const xp = {
    loop: true,
    autoplay: true,
    animationData: diamondAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
      <Container>
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h1>DevKids</h1>
        </div>
        <div className="menu">
          {props.children}
        </div>
        <div className="progress-container">
          <h2>Progresso de Hoje</h2>
          <div>
            <Lottie
              options={progress}
              direction={1}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <p>Finalize a meta de hoje e ganhe</p>
          <div className="xp">
            <div className="xp-animation">
              <Lottie
                options={xp}
                direction={1}
                isStopped={false}
                isPaused={false}
              />
            </div>
            <p>10</p>
          </div>
        </div>
      </Container>
  );
}
