import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Desserts = (props) => {
  
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState('')
  const [ingInput, setIngInput] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleImgChange = (e) => {
    setImg(e.target.value)
  }

  const handleIngredientsClick = (e) => {
    e.preventDefault()
    setIngredients(oldArray => [...oldArray, {ingredient: ingInput}])
    setIngInput('')
    
  }

  const handleIngredientChange = (e) => {
    setIngInput(e.target.value)
  }

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value)
    console.log(instructions)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalObject = {
      name: name,
      img: img,
      ingredients: ingredients,
      instructions: instructions,
    }
    props.createDesserts(finalObject);
    setName("")
    setImg("")
    setIngInput("")
    setIngredients([])
    setInstructions("")
  }

  const loaded = () => {
    return props.desserts.map((des) => {
      return (
        <div key={des._id}>
          <Link to={`/desserts/${des._id}`}><h1>{des.name}</h1></Link>
          <img src={des.img} alt={des.name}/>
        </div>
      )
    })
  }

  const loading = () => {
    return(
      <h3>Loading . . .</h3>
    )
  }

  return (
    <section>
      <form>
        <label> <span>Name of Recipe</span>
            <input 
              type="text"
              value={name}
              name="name"
              placeholder="Name of Dish"
              onChange={handleNameChange}
            />
        </label>
        <label> <span>Image of Recipe</span>
          <input 
            type="text"
            value={img}
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
        {ingredients.map((ing) => {
            return (
              <div>
                {ing.ingredient}
              </div>
            )
          })}
        <label> <span>Instructions</span>
          <textarea
            name="instructions"
            placeholder=" Add instructions"
            onChange={handleInstructionsChange}
            value={instructions}
          > 
            {instructions}
          </textarea>
        </label>
        <input type="submit" value="Add Recipe"/>
      </form>
      {props.desserts ? loaded() : loading()}
    </section>
  )
}

export default Desserts