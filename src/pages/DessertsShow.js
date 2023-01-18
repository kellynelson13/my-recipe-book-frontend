import React, { useState } from 'react'

const DessertsShow = (props) => {

    const id = props.match.params.id
    const desserts = props.desserts
    const dessert = desserts.find(de => de._id === id)

    const [ editName, setEditName ] = useState(dessert.name)
    const [ editImg, setEditImg ] = useState(dessert.img)
    const [ editIngredients, setEditIngredients ] = useState(dessert.ingredients)
    const [ editInstructions, setEditInstructions ] = useState(dessert.instructions)
    const [ ingInput, setIngInput] = useState('')

    const handleNameChange = (e) => {
      setEditName(e.target.value)
    }

    const handleImgChange = (e) => {
      setEditImg(e.target.value)
    }

    const handleIngredientChange = (e) => {
      setIngInput(e.target.value)
    }

    const handleIngredientsClick = (e) => {
      e.preventDefault()
      setEditIngredients(oldArray => [...oldArray, {ingredient: ingInput}])
      setIngInput('')
      console.log(editIngredients)
    }

    const handleInstructionsChange = (e) => {
      setEditInstructions(e.target.value)
    }

    const handleDeleteClick = (nameOfIngredient) => {
      
      let index = editIngredients.findIndex(ing => {
        return ing.ingredient === nameOfIngredient
      })
      const deletedItem = editIngredients.splice(index, 1)
      console.log(deletedItem)
      props.history.push("/desserts/" + id)
      
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const finalObject = {
        name: editName,
        img: editImg,
        ingredients: editIngredients,
        instructions: editInstructions
      }
      // console.log(finalObject)
      props.updateDesserts(finalObject, dessert._id)
      props.history.push("/desserts")
    }

    const removeDessert = () => {
      props.deleteDesserts(dessert._id)
      props.history.push('/desserts')
    }


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