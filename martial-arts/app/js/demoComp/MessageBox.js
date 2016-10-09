//import react.
var React = require('react');

var MessageBox = React.createClass({
    render: function () {
        var msg = this.props.message;
        return (
            <p>Message is: {msg}</p>
        )
    }
});


var MessageList = React.createClass({
    render: function () {

        var msgList = new Array();
        var dom = new Array();
        for (var i = 0; i < 10; i++) {
            msgList.push("message : 00" + i);
        }

        msgList.forEach(function (item, index) {
            dom.push(<MessageBox message = {item}/>);
        });

        return (
            <div>
                <h1>message list: </h1>
                <span>{dom}</span>
            </div>
        );
    }
});


module.exports = MessageList;