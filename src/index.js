import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import App from './components/App'
import './index.css'

ReactDOM.render((
	<Provider store={createStore(reducers)}>
		<Router>
			<div>
	      <Route exact path="/" component={App} />

				</div>
		</Router>
	</Provider>
), document.getElementById('root')
)
