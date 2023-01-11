import React, { useState } from 'react'

const AppetizersShow = (props) => {

    const id = props.match.params.id
    const appetizers = props.appetizers
    const appetizer = appetizers.find(ap => ap._id === id)

    const [ editName, setEditName ] = useState(appetizer.name)
    const [ editImg, setEditImg ] = useState(appetizer.img)
    const [ editIngredients, setEditIngredients ] = useState(appetizer.ingredients)
    const [ editInstructions, setEditInstructions ] = useState(appetizer.instructions)

    const handleNameChange = (e) => {
      setEditName(e.target.value)
    }

    const handleImgChange = (e) => {
      setEditImg(e.target.value)
    }

    const handleIngredientChange = (e) => {
      setEditIngredients(e.target.value)
    }

    const handleInstructionsChange = (e) => {
      setEditInstructions(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      // props.updateAppetizers(editForm, appetizer._id)
      props.history.push("/")
    }

  return (
    <div>
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
            value={editIngredients}
            name="ingredients"
            placeholder="Ingredient"
            onChange={handleIngredientChange}
          />
          {/* <button onClick={handleIngredientsClick} >Add Ingredient</button> */}
        </label>
            {/* {ingredients.map((ing) => {
            return (
              <div>
                {ing.ingredient}
              </div>
            )
          })} */}
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

export default AppetizersShow