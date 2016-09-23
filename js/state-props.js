//Click count app.
var ParentComponets = React.createClass({
    render: function () {
        var msgs = ["message 001", "message 002", "message 003"];
        return (
            <div>
                <h1>With data.</h1>
                <ChildComponets messages={msgs}/>
                <h1>Default data.</h1>
                <ChildComponets />
            </div>
        );
    }
});

var ChildComponets = React.createClass({
    propTypes: function () {
        return { messages: React.propTypes.array.isRequired };
    },
    getDefaultProps: function () {
        return { messages: ["default~~~"] };
    },
    render: function () {
        var msgList = new Array();
        this.props.messages.forEach(
            function (msg, index) {
                console.log(msg);
                msgList.push(<p key={index}>message is: {msg}</p>);
            }
        );

        return (<div>{msgList}</div>);
    }
});
ReactDOM.render(<ParentComponets/>,
    document.getElementById('app'),
    function () { console.log('render finsihed!'); }
)
