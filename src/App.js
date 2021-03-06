import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Marketing from "./components/marketing/Marketing";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import { Route } from "react-router-dom";
import "./sass_master/index.scss";

import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Route exact path="/" component={Marketing} />
      <Route path="/about" component={About} />
      <UserContext.Provider value={{user, setUser}}>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/profile" component={Profile} />
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
