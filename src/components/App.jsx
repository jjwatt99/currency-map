import React from 'react';
import example from '../ExampleData.js';
import previousData from '../Previous.js';
import ItemList from './ItemList.jsx';
import $ from 'jquery';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: false,
			currencyData: [],
			previous: []
		}

		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount() {
		this.getData(function(data) {
			var array = [
  		  {Close: data[0]['euro'], Symbol: 'EURUSD'},
  			{Close: data[0]['yen'], Symbol: 'USDJPY'},
  			{Close: data[0]['pound'], Symbol: 'GBPUSD'},
  			{Close: data[0]['franc'], Symbol: 'CHFUSD'}
  		];
  		this.setState({
				previous: array
			}); 
		}.bind(this));

		function search1() {
			this.props.searchApi('EURUSD', function(data) {
				var array = this.state.currencyData;
				array[0] = data;
				this.setState({
					currencyData: array
				}); 
				console.log('this is currencyData', this.state.currencyData);
			}.bind(this));
		};

		setInterval(search1.bind(this), 5000);

		function search2() {
			this.props.searchApi('USDJPY', function(data) {
				var array = this.state.currencyData;
				array[1] = data;
				this.setState({
					currencyData: array
				}); 
				console.log('this is currencyData', this.state.currencyData);
			}.bind(this));
		};

		setInterval(search2.bind(this), 5250);

		function search3() {
			this.props.searchApi('GBPUSD', function(data) {
				var array = this.state.currencyData;
				array[2] = data;
				this.setState({
					currencyData: array
				}); 
				console.log('this is currencyData', this.state.currencyData);
			}.bind(this));
		};

		setInterval(search3.bind(this), 5500);

		function search4() {
			this.props.searchApi('CHFUSD', function(data) {
				var array = this.state.currencyData;
				array[3] = data;
				this.setState({
					currencyData: array
				}); 
				console.log('this is currencyData', this.state.currencyData);
			}.bind(this));
		};

		setInterval(search4.bind(this), 5750);

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

	getData(callback) {
    $.ajax({
	  	url: '/money',
	  	success: function(data) {
	  		callback(data);
	  	}
	  });
	}

	handleClick() {
		this.setState({display: !this.state.display})
	}

	render() {
		for (var i = 0; i < this.state.currencyData.length; i++) {
			for (var j = 0; j < this.state.previous.length; j++) {
				if (this.state.currencyData[i].Symbol === this.state.previous[j].Symbol) {
			  	this.state.currencyData[i].Previous = this.state.previous[j].Close;	
			  	break;
				}
			}
		}
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