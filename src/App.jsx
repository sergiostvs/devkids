import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";

import LeftMenu from "./components/LeftMenu";
import Main from "./components/Main";

import { Container } from "./styles/global";
import Training from "./pages/Training";
import NotFound from "./pages/404";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <LeftMenu>
          <NavLink to="/" activeClassName="active">
            <button>Início</button>
          </NavLink>
          <NavLink to="/training" activeClassName="active">
            <button>Treinar</button>
          </NavLink>
          <button>Progresso</button>
          <button>Estatísticas</button>
          <button>Configurações</button>
        </LeftMenu>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training" element={<Training />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
