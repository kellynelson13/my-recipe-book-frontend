import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <div>
          My Recipe Book
        </div>
      </Link>
    </nav>
  )
}

export default Header