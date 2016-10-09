var React = require('react');



var topBar = React.createClass({
    render: function () {
        return (
            <div className="top">
                <div className="container">
                    <ul className="loginbar pull-right">
                        <li><a href="page_faq.html" className="login-btn">主页</a></li>
                        <li className="devider">&nbsp; </li>
                        <li><a href="page_login.html" className="login-btn">登录</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = topBar;