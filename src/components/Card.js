import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCaretRightFill } from 'react-icons/bs'

import ItemCard from './ItemCard'

const Card = (props) => {
  const { data, title, viewMore } = props
  return (
    <div className='container'>
      <div className='block__card'>
        <h2 className='block__card--title'>{title && <>{title}</>}</h2>
        <div className='block__card--row'>
          {data.map((item, key) => {
            const { attributes } = item
            console.log(item)
            return <ItemCard key={key} data={attributes} />
          })}
        </div>
        <div className='block__card--view-more'>
          {viewMore && (
            <Link to={viewMore}>
              View more
              <BsFillCaretRightFill className='block__card--view-more--icon' />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
