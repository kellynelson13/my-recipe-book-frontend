import React, {useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Appetizers from '../pages/Appetizers';
import AppetizersShow from '../pages/AppetizersShow';
import Desserts from '../pages/Desserts';
import DessertsShow from '../pages/DessertsShow';

const Main = () => {

  const [appetizers, setAppetizers] = useState([])
  const [entrees, setEntrees] = useState([])
  const [desserts, setDesserts] = useState([])

  const appetizersURL = "https://my-recipe-book-13.herokuapp.com/appetizers/";
  const dessertsURL = "https://my-recipe-book-13.herokuapp.com/desserts/";

  const getAppetizers = async () => {
    const response = await fetch(appetizersURL);
    const data = await response.json();
    setAppetizers(data);
  }

  const getDesserts = async () => {
    const response = await fetch(dessertsURL);
    const data = await response.json();
    setDesserts(data);
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

  const createDesserts = async (dessert) => {
    await fetch(dessertsURL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(dessert),
      }
    )
    getDesserts();
  }

  const updateAppetizers = async (appetizer, id) => {
    await fetch(appetizersURL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(appetizer)
    })
    getAppetizers()
  }

  const deleteAppetizers = async (id) => {
    await fetch(appetizersURL + id, {
      method: "DELETE"
    })
    getAppetizers()
  }

  useEffect(() => {
    getAppetizers()
    getDesserts()
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
            <AppetizersShow 
              {...rp}
              appetizers={appetizers}
              updateAppetizers={updateAppetizers}
              deleteAppetizers={deleteAppetizers}
            />
            )
          }
        />
        <Route exact path="/desserts">
          <Desserts desserts={desserts} createDesserts={createDesserts} />
        </Route>
        <Route 
          path="/desserts/:id"
          render={(rp) => (
            <DessertsShow 
              {...rp}
              desserts={desserts}
              updateDesserts={updateDesserts}
              deleteDesserts={deleteDesserts}
            />
            )
          }
        />
      </Switch>
    </main>
  )
}

export default Main