// import logo from "./teamicon.svg";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import List from "./components/List";
import Edit from "./components/Edit";

// const Logo = <img src={logo} className="App-logo" alt="logo" />;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/Edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
