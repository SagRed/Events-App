import "./App.css";
import Home from "./Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
