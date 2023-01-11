import React, { useState } from 'react'

const AppetizersShow = (props) => {

    const id = props.match.params.id
    const appetizers = props.appetizers
    const appetizer = appetizers.find(ap => ap._id === id)

    const [ editForm, setEditForm ] = useState(appetizer)

    const handleChange = (e) => {
      setEditForm({ ...editForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      props.updateAppetizers(editForm, appetizer._id)
      props.history.push("/")
    }

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