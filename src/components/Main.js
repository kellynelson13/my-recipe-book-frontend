import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Appetizers from '../pages/Appetizers';
import AppetizersShow from '../pages/AppetizersShow';

const Main = () => {

  const [appetizers, setAppetizers] = useState([])
  const [entrees, setEntrees] = useState([])
  const [desserts, setDesserts] = useState([])

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