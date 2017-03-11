import React from 'react';
import $ from 'jquery';
import apiKey from './config/keys.js';


var searchApi = (symbol, callback) => {

var source = 'http://globalcurrencies.xignite.com/xGlobalCurrencies.json/GetRealTimeRate?Symbol=' + symbol + '&_token=' + apiKey;

  $.ajax({
  	url: source,
  	success: function(data) {
  		callback(data);
  	}
  });

}

export default searchApi;
