var React = require('react');
var ServicePoint = React.createClass({
    getDefaultProps: function () {
        return {
            title: '<title>',
            content: '<content>',
            btnStyle: '<btnStyle>',
            onClick: function () { }
        }
    },
    render: function () {
        return (
            <div className="span4" onClick={this.props.onClick}>
                <div className="service clearfix">
                    <i className={this.props.btnStyle}></i>
                    <div className="desc">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = ServicePoint;