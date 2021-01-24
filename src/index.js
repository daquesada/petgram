import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {Apollo} from './ApolloProvider'
import { Provider } from './Context'


ReactDom.render(
  <Provider >
    <Apollo>
      <App />
    </Apollo>
  </Provider>
  , document.getElementById('app'))
