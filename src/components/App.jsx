
import React from 'react';

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
	  	<button onClick={this.handleClick}>
	  		Display
	  	</button>
	  );
	}
}

export default App;