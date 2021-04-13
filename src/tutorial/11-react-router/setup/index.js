import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar></Navbar>
      {/* Switchコンポーネントで囲むことで一番最初にマッチするURLを持つページのコンテンツのみが表示されるようになる */}
      <Switch>
        {/* exactをつけないと「/about」でHomeとAboutの量ページのコンテンツがページに表示されてしまう */}
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/people">
          <People></People>
        </Route>
        {/* ↓「:id」のコロンはパラメータの意味 */}
        <Route exact path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
