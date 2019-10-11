import React from 'react'
import Header from './Header'
import Footer from './Footer'

// funcion
const Layout = ({children}) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout