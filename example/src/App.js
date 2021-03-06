import React from 'react'

import { NavBar } from '@nkonada/react-page-nav'
import '@nkonada/react-page-nav/dist/index.css'

const App = () => {
  return (
    <NavBar
      links={[
        { label: 'Home', url: '/home' },
        { label: 'Products', url: '/products' },
        { label: 'About', url: '/about' },
        { label: 'Contact', url: '/contact' }
      ]}
    />
  )
}

export default App
