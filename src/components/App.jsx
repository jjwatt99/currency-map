import React from 'react';
import example from '../ExampleData.js';
import ItemList from './ItemList.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: false,
			currencyData: []
		}

		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount() {
		this.props.searchApi('EURUSD', function(data) {
			var array = this.state.currencyData;
			array.push(data);
			this.setState({
				currencyData: array
			}); 
			console.log('this is currencyData', this.state.currencyData);
		}.bind(this));

		this.props.searchApi('USDJPY', function(data) {
			var array = this.state.currencyData;
			array.push(data);
			this.setState({
				currencyData: array
			}); 
			console.log('this is currencyData', this.state.currencyData);
		}.bind(this));

		this.props.searchApi('GBPUSD', function(data) {
			var array = this.state.currencyData;
			array.push(data);
			this.setState({
				currencyData: array
			}); 
			console.log('this is currencyData', this.state.currencyData);
		}.bind(this));

		this.props.searchApi('CHFUSD', function(data) {
			var array = this.state.currencyData;
			array.push(data);
			this.setState({
				currencyData: array
			}); 
			console.log('this is currencyData', this.state.currencyData);
		}.bind(this));
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
		  	{this.state.display ? <div><ItemList currencies={this.state.currencyData}/></div> : null}
		  </div>	
	  );
	}
}

export default App;