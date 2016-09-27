
//Click count app.
var ClickCountComponets = React.createClass({
    getInitialState: function () {
        var _state = {
            clickCount: 0,
            fontColor: 'red'
        };
        return _state;
    },
    handleCilck: function () {
        this.setState({ clickCount: this.state.clickCount + 1 });
    },
    render: function () {
        var objStyle = {
            color: (this.state.clickCount % 2 == 0) ? "red" : "blue",
            clickCount: 0
        };
        var template = (
            <div>
                <h1 style={objStyle}>Click Componets.</h1>
                <div>Click Count is: {this.state.clickCount}.</div>
                <button onClick={this.handleCilck}>Add count</button>
            </div>
        );

        return template;
    }
});

ReactDOM.render(<ClickCountComponets/>,
    document.getElementById('app'),
    function () { console.log('render finsihed!'); }
)

