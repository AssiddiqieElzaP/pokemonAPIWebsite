import React from 'react'
import './Detail.css'

const Detail = ({pokeName}) => {
    return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {pokeName} Detail
        </div>
      </div>
    </div>
    )
}

export default Detail