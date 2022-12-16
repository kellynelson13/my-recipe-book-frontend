import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Appetizers = (props) => {

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
    console.log("Image", img)
  }

  const handleIngredientsClick = (e) => {
    e.preventDefault()
    setIngredients(oldArray => [...oldArray, {ingredient: ingInput}])
    setIngInput('')
    
  }

  const handleIngredientChange = (e) => {
    setIngInput(e.target.value)
    console.log("ing", ingInput)
  }

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value)
    console.log("instructions", instructions)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalObject = {
      name: name,
      img: img,
      ingredients: ingredients,
      instructions: instructions,
    }
    props.createAppetizers(finalObject);
    setName("")
    setImg("")
    setIngInput("")
    setIngredients([])
    setInstructions("")
  }


  const loaded = () => {
    return props.appetizers.map((app) => {
      return (
        <div key={app._id}>
          <Link to={`/appetizers/${app._id}`}><h1>{app.name}</h1></Link>
          <img src={app.img} alt={app.name}/>
        </div>
      )
    })
  }

  const loading = () => {
    return <h3>Loading . . .</h3>
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
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
      {props.appetizers ? loaded() : loading()}
    </section>
  )
}

export default Appetizers