/*********************************************************************************
*  WEB422 – Assignment 04
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: Mark-Henry Tasarra Student ID: 065360125 Date: March 8, 2019
*
********************************************************************************/ 


import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Projects from './components/Projects';
import Teams from './components/Teams';
import Employees from './components/Employees';
import Overview from './components/Overview';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview />
        )} />
        <Route exact path='/projects' render={() => (
          <Projects />
        )} />
        <Route exact path='/teams' render={() => (
          <Teams />
        )} />
        <Route exact path='/employees' render={() => (
          <Employees />
        )} />
        <Route exact path='*' render={() => (
          <NotFound />
        )} />
      </Switch>
    );
  }
}

export default App;