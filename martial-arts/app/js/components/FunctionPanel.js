var React = require("react");
var ServicePointComp = require("./../toolBox/ServicePointComp.js")

var FunctionPanel = React.createClass({
    getDefaultProps: function () {
        return { servicePoints: [] }
    },
    render: function () {
        var datas = this.props.servicePoints;
        var domServicePoints = [];

        datas.forEach(function (data, index) {
            domServicePoints.push(
                <ServicePointComp key={index} title={data.title} content={data.content} btnStyle={data.btnStyle}/>
            );
        })
        return (
            <div className="row-fluid">
                {domServicePoints}
            </div>
        )
    }
});


module.exports = FunctionPanel;