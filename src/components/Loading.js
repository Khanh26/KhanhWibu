import React from 'react'
import imageLoading from '../assets/images/loading.svg'
const Loading = () => {
  return (
    <div className='block__loading'>
      <img src={imageLoading} alt='loading' />
    </div>
  )
}

export default Loading
