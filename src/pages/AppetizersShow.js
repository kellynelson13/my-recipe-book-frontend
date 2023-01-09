import React from 'react'

const AppetizersShow = (props) => {

    const id = props.match.params.id
    const appetizers = props.appetizers
    const appetizer = appetizers.find(ap => ap._id === id)

  return (
    <div>
      <h1>{appetizer.name}</h1>
      <img src={appetizer.img} alt={appetizer.name}/>
      <ul>
      {appetizer.ingredients.map(i => {
        return(
          <li>{i.ingredient}</li>
        )
      })}
      </ul>
      <p>{appetizer.instructions}</p>
    </div>
  )
}

export default AppetizersShow