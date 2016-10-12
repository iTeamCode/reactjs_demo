var React = require("react");


var JoinUsPanel = React.createClass({

    //getInitialState
    getDefaultProps: function () {
        return {
            title: '<title>',
            contentText: '<contentText>',
            buttonText: '<buttonText>'
        };
    },
    render: function () {
        return (
            <div className="row-fluid purchase margin-bottom-30">
                <div className="container">
                    <div className="span9">
                        <span>{this.props.title}</span>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; {this.props.contentText}</p>
                    </div>
                    <a href="#" className="btn-buy hover-effect">{this.props.buttonText}</a>
                </div>
            </div>
        )
    }
});


module.exports = JoinUsPanel;