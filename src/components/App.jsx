import React from 'react';
import example from '../ExampleData.js';
import ItemList from './ItemList.jsx'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({display: !this.state.display})
	}

	render() {
	  return (
	  	<div>
		  	<button onClick={this.handleClick}>
		  		Display
		  	</button>
		  	<div>
		  	  <ItemList currencies={example}/>
		  	</div>
		  </div>	
	  );
	}
}

export default App;