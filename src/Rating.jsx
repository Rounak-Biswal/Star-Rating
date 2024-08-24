import React, { useState } from 'react'
import style from "./Rating.module.css"

const Rating = ({ num = 5 }) => {
  const [click, setClick] = useState(null)
  const [hover, setHover] = useState(null)

  let handleClick = (id) => {
    setClick(id)
  }

  let handleHover = (id) => {
    setHover(id)
  }

  let handleHoverLeave = (id) => {
    setHover(null)
  }

  return (
    <div className={style.main}>
      <h1>Rating component</h1>
      <div className={style.cardTray}>{[...Array(num)].map((_,idx) => {

        return <div
          key={idx}
          className={click >= idx || hover >= idx ? style.active : style.inactive}
          onClick={() => handleClick(idx)}
          onMouseEnter={() => handleHover(idx)}
          onMouseLeave={() => handleHoverLeave(idx)}>
          <i className="fa-solid fa-star"></i>
        </div>
      })}</div>
    </div>
  )
}

export default Rating
