import { Route, Routes,  } from "react-router-dom";
import Nabvar from "./components/navbar/Nabvar";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Desarrollo from "./pages/DesarrolloWeb";
import DesarrolloMovil from "./pages/DesarrolloMovil";

import Branding from "./pages/Branding";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className=" overflow-y-hidden">
      <Nabvar />
      
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/nosotros" Component={Nosotros} />
        <Route path="/desarrollo" Component={Desarrollo} />
        <Route path="/desarrolloMovil" Component={DesarrolloMovil} />
        <Route path="/branding" Component={Branding} />
        <Route path="/contacto" Component={Contacto} />
      </Routes>
    </div>
  );
}

export default App;
