import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router-dom'
import { BsStar, BsTv, BsCalendarEvent } from 'react-icons/bs'
const ItemCard = (props) => {
  const { data } = props
  return (
    <div className='block__card--column'>
      <Link to={`anime/` + data.slug} className='block__card_item'>
        <img
          className='block__card_item--img-thumbnail'
          src={data.posterImage.small}
          alt={data.posterImage.small}
        />
        <div className='block__card_item--body'>
          <h3 className='block__card_item--body--title'>
            {data.titles.en_jp ? data.titles.en_jp : data.titles.en}
          </h3>
          {data.averageRating && (
            <p className='block__card_item--body--rating'>
              <BsStar /> Rating: {data.averageRating}/100
            </p>
          )}
          <p className='block__card_item--body--show-type'>
            <BsTv /> Show: {data.showType}
          </p>
          <p className='block__card_item--body--status'>
            <BsCalendarEvent /> Date:{' '}
            {Moment(data.startDate).format('DD/MM/YYYY')}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default ItemCard
