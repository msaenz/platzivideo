import React from 'react'

const NotFound = () => (
  <React.Fragment>
    <section className="notfound">
      <div className="notfound__container">
        <img
          className='notfound__container-img' 
          src='../assets/static/notfound.png' 
          alt='Página No Encontrada'
        />
      </div>
      <p>Página no Encontrada</p>
    </section>
  </React.Fragment>
)

export default NotFound
