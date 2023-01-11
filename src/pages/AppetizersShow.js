import React, { useState } from 'react'

const AppetizersShow = (props) => {

    const id = props.match.params.id
    const appetizers = props.appetizers
    const appetizer = appetizers.find(ap => ap._id === id)

    const [ editName, setEditName ] = useState(appetizer.name)
    const [ editImg, setEditImg ] = useState(appetizer.img)
    const [ editIngredients, setEditIngredients ] = useState(appetizer.ingredients)
    const [ editInstructions, setEditInstructions ] = useState(appetizer.instructions)

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
            value={editForm.name}
            name="name"
            placeholder="Name of Dish"
            onChange={handleChange}
          />
        </label>
        <label> <span>Image of Recipe</span>
          <input 
            type="text"
            value={editForm.img}
            name="img"
            placeholder="Image URL"
            onChange={handleChange}
          />
        </label>
        <label> <span>Ingredients</span>
          <input 
            type="text"
            value={editForm.ingredients}
            name="ingredients"
            placeholder="Ingredient"
            onChange={handleChange}
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
            onChange={handleChange}
            value={editForm.instructions}
          > 
            {editForm.instructions}
          </textarea>
        </label>
        <input type="submit" value="Update Recipe"/>
      </form>
    </div>
  )
}

export default AppetizersShow