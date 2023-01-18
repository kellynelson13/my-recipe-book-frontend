import React, { useState } from 'react'

const DessertsShow = (props) => {

    const id = props.match.params.id
    const desserts = props.desserts
    const dessert = desserts.find(de => de._id === id)

  return (
    <div>DessertsShow</div>
  )
}

export default DessertsShow