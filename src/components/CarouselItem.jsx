import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'

const CarouselItem = ({cover, title, year, contetRating, duration}) => (
  <div className="carousel-item">
    <img className="carousel-item__img"  src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img src={playIcon} alt="Play Music"/>
        <img src={plusIcon} alt="Add Theme"/>
      </div>
      <p className="carousel-item__details--title">{title}</p>  
      <p className="carousel-item__details--subtitle">
        {`${year} ${contetRating} ${duration}`}
      </p>  
    </div>
  </div>
)

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contetRating: PropTypes.string,
  duration: PropTypes.number
}
export default CarouselItem
