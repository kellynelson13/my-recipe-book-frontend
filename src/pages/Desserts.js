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
    <div>{props.desserts ? loaded() : loading()}</div>
  )
}

export default Desserts