import React from 'react'

const AppetizersShow = (props) => {

    const id = props.match.params.id
    const appetizers = props.appetizers
    const appetizer = appetizers.find(ap => ap._id === id)

  return (
    <div>AppetizersShow</div>
  )
}

export default AppetizersShow