# @nkonada/react-page-nav

> A single component for all your page navigation needs

[![NPM](https://img.shields.io/npm/v/@nkonada/react-page-nav.svg)](https://www.npmjs.com/package/@nkonada/react-page-nav) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @nkonada/react-page-nav
```

## Usage

```jsx
import React, { Component } from 'react'

import { NavBar } from '@nkonada/react-page-nav'
import '@nkonada/react-page-nav/dist/index.css'

class Example extends Component {
  render() {
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
}
```

## License

MIT © [ChaituKNag](https://github.com/ChaituKNag)
