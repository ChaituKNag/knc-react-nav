import React from 'react'

import { NavBar } from '@knc/react-nav'
import '@knc/react-nav/dist/index.css'

const App = () => {
  return <NavBar
    links={[
      { label: "Home", url: "/home" },
      { label: "Products", url: "/products" },
      { label: "About", url: "/about" },
      { label: "Contact", url: "/contact" },
    ]}
  />
}

export default App
