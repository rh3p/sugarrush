import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
    <Header />
    <div>{children}</div>
    <Footer />
    {/* header and footer is common everywhere 
    so we make a component called layout and 
    we pass children in that component 
    which never changes the header or footer 
    only the content will change
 */}

    
    </>
  )
}

export default Layout