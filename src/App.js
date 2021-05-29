import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NewEventMainPage from "./components/NewEventMainPage";
import EditEventMainPage from "./components/EditEventMainPage";
import { auth } from "./config/firebase";
import RegisteredUsersMainPage from "./components/RegisteredUsersMainPage";
import { UseUserStore } from "./components/UseUserStore";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        UseUserStore.setState({ user: user });
      }
    });
  }, [auth]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create-event">
            <NewEventMainPage />
          </Route>
          <Route path="/edit-event">
            <EditEventMainPage />
          </Route>
          <Route path="/registered-users/:id">
            <RegisteredUsersMainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
