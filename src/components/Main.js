import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Appetizers from '../pages/Appetizers';
import AppetizersShow from '../pages/AppetizersShow';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  )
}

export default Main