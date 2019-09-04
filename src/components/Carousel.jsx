import React from 'react'
import '../assets/styles/components/Carousel.scss'

const Carousel = ({children}) => (
  <section className="carousel">
    <div className="carousel__container">
      {children}
      {children}
      {children}
      {children}
    </div>
  </section>
)

export default Carousel
