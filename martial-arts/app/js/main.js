var React = require('react');
var ReactDOM = require('react-dom');

var TopBarComp = require('./components/TopBarComp.js');


var mainComp = ReactDOM.render(
    <TopBarComp/>,
    document.getElementById('app')
);