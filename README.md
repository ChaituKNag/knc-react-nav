# @knc/react-nav

> A single component library for all your page navigation needs

[![NPM](https://img.shields.io/npm/v/@knc/react-nav.svg)](https://www.npmjs.com/package/@knc/react-nav) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @knc/react-nav
```

## Usage

### Basic `NavBar`

```jsx
import React, { Component } from 'react'

import { NavBar } from '@knc/react-nav'
import '@knc/react-nav/dist/index.css'

class Example extends Component {
  render() {
    return <NavBar
      links={[
        { label: "Home", url: "/home" },
        { label: "Products", url: "/products" },
        { label: "About", url: "/about" },
        { label: "Contact", url: "/contact" },
      ]}
    />
  }
}
```

## License

MIT © [ChaituKNag](https://github.com/ChaituKNag)
