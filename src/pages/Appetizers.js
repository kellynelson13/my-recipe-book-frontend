import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Appetizers = (props) => {

  const [userInput, setUserInput] = useState({
    name: "",
    img: "",
    ingredients: [{}],
    instructions: ""
  })

  const handleChange = (e) => {
    setUserInput({...userInput, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createAppetizers(userInput);
    setUserInput({
      name: "",
      img: "",
      ingredients: [],
      instructions: ""
    })
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

  return props.appetizers ? loaded() : loading();
    
  
}

export default Appetizers