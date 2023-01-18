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
        <button onClick={removeDessert}>Delete Dessert</button>
      </div>

      <form onSubmit={handleSubmit}>
        <label> <span>Name of Recipe</span>
          <input 
            type="text"
            value={editName}
            name="name"
            placeholder="Name of Dish"
            onChange={handleNameChange}
          />
        </label>
        <label> <span>Image of Recipe</span>
          <input 
            type="text"
            value={editImg}
            name="img"
            placeholder="Image URL"
            onChange={handleImgChange}
          />
        </label>
        <label> <span>Ingredients</span>
          <input 
            type="text"
            value={ingInput}
            name="ingredients"
            placeholder="Ingredient"
            onChange={handleIngredientChange}
          />
          <button onClick={handleIngredientsClick} >Add Ingredient</button>
        </label>
            {editIngredients.map((ing) => {
            return (
              <div>
                <ul>
                  <li>{ing.ingredient}</li>
                  <button onClick={() => {handleDeleteClick(ing.ingredient)}}>X</button>
                </ul>
              </div>
            )
          })}
        <label> <span>Instructions</span>
          <textarea
            name="instructions"
            placeholder=" Add instructions"
            onChange={handleInstructionsChange}
            value={editInstructions}
          > 
            {editInstructions}
          </textarea>
        </label>
        <input type="submit" value="Update Recipe"/>
      </form>    

    </div>
  )
}

export default DessertsShow