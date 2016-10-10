var React = require("react");


var FunctionPanel = React.createClass({
    render: function () {
        return (
            <div className="row-fluid">
                <div className="span4">
                    <div className="service clearfix">
                        <i className="icon-edit"></i>
                        <div className="desc">
                            <h4>修练签到</h4>
                            <p>人生，本就是一场修行。而随太极为我们指明了方向。俗语有云“习武者：冬，需不惧三九之寒。夏，要无畏三伏之炙”。勿忘初心，方得始终... ...</p>
                        </div>
                    </div>
                </div>
                <div className="span4">
                    <div className="service clearfix">
                        <i className="icon-group"></i>
                        <div className="desc">
                            <h4>太极江湖</h4>
                            <p>太极的江湖，是祥和，淡雅的江湖。这里没有影视作品里的刀光剑影... ...取而代之的是对太极的执念和为传承的坚持。</p>
                        </div>
                    </div>
                </div>
                <div className="span4">
                    <div className="service clearfix">
                        <i className="icon-pinterest-sign"></i>
                        <div className="desc">
                            <h4>太极之路</h4>
                            <p>武术之于我们，或是年少时的梦想，亦或是不惑之年的消遣。无论何时起步，你将会遇见的不仅仅是温和，谦虚的拳友。在太极之路尽头等着你的，是那个最好的自己... ...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});


module.exports = FunctionPanel;