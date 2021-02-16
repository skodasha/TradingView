import * as React from 'react'
import './App.css'
import { TradingView } from './components/TradingView'

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<h1>Trading View</h1>
				<TradingView />
			</div>
		);
	}
}

export default App;
