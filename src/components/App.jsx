
import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {

	}

	render() {
	  return (
	  	<button onClick={this.handleClick}>
	  		Display
	  	</button>
	  );
	}
}

export default App;