import React, { useState } from 'react'

const DessertsShow = (props) => {

    const id = props.match.params.id
    const desserts = props.desserts
    const dessert = desserts.find(de => de._id === id)

  return (
    <div>
      <h1>{dessert.name}</h1>
      <img src={dessert.img} alt={dessert.name}/>
      <ul>
        {dessert.ingredients.map(ing => {
          return (
          <li>{ing.ingredient}</li>
          )
        })}
      </ul>
      <p>{dessert.instructions}</p>
    </div>
  )
}

export default DessertsShow