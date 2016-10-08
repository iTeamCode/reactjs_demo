var React = require('react');
var ReactDOM = require('react-dom');

var TopBarComp = require('./components/TopBarComp.js');
var NavBarComp = require('./components/NavBarComp.js');


var mainComp = ReactDOM.render(
    <div className="container">
        <TopBarComp/>
        <NavBarComp/>
    </div>,
    document.getElementById('app')
);
