import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Usuarios from "./Usuarios";

const Tareas = () => <div>Tareas</div>;
// const Tareas = () => {
//   return <div>Tareas</div>;
// };

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <div  className="margen">
          <Route exact path="/" component={Usuarios} />
          <Route exact path="/tareas" component={Tareas} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
