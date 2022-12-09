import React, {useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Appetizers from '../pages/Appetizers';
import AppetizersShow from '../pages/AppetizersShow';

const Main = () => {

  const [appetizers, setAppetizers] = useState([])
  const [entrees, setEntrees] = useState([])
  const [desserts, setDesserts] = useState([])

  const appetizersURL = "https://my-recipe-book-13.herokuapp.com/appetizers";

  const getAppetizers = async () => {
    const response = await fetch(appetizersURL);
    const data = await response.json();
    setAppetizers(data);
  }

  const createAppetizers = async (app) => {
    await fetch(appetizersURL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(app),
      }
    )
    getAppetizers();
  }

  useEffect(() => {
    getAppetizers()
  }, [])

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/appetizers">
          <Appetizers appetizers={appetizers} createAppetizers={createAppetizers}/>
        </Route>
        <Route 
          path="/appetizers/:id"
          render={(rp) => (
            <AppetizersShow {...rp}/>
            )
          }
        />
      </Switch>
    </main>
  )
}

export default Main