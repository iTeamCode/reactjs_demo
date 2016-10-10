var React = require('react');

var NavBarMenu = React.createClass({
    getDefaultProps: function () {
        return { menuTitle: '', subMenus: [] };
    },
    render: function () {
        var title = this.props.menuTitle;   //title 
        var subMenus = this.props.subMenus;   //subMenus arrays

        var domSubMenu = [];
        for (var i = 0; i < subMenus.length; i++) {
            domSubMenu.push(
                <li key={"subMenu__" + i} > <a href="#">{subMenus[i]}</a></li >
            );
        }

        var domOutput = null;
        if (subMenus != null) {
            if (subMenus.length > 0) {
                domOutput = (
                    <li className={title == '首页' ? 'active' : ''}>
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">{title}
                            <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu">{domSubMenu}</ul>
                        <b className="caret-out"/>
                    </li>
                )
            }
            else {
                domOutput = (
                    <li className={title == '首页' ? 'active' : ''}>
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">{title}
                        </a>
                        <b className="caret-out"/>
                    </li>
                )
            }
        }


        return domOutput;
    }
})

var HomeNavBar = React.createClass({
    render: function () {
        var navData = [
            { title: '首页', subMenus: [] },
            { title: '活动', subMenus: ['每日签到', '套路练习'] },
            { title: '拳谱', subMenus: ['陈氏太极13式', '老架一路', '老架二路'] },
            { title: '圈子', subMenus: ['每日推荐', '习武感悟', '武林资讯'] },
            { title: '修行之路', subMenus: ['个人信息', '我的活动', '我的修行'] },
            { title: '关于我们', subMenus: ['随太极简介', '网站建设', '加入我们'] }
        ];

        var domMenu = new Array();
        navData.forEach(function (item, index) {
            domMenu.push(
                <NavBarMenu key={'navBarMenu_' + index} menuTitle={item.title} subMenus={item.subMenus} />
            );
        })
        return (

            <div className="navbar">
                <div className="navbar-inner">
                    <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </a>
                    <div className="nav-collapse collapse">
                        <ul className="nav top-2">
                            {domMenu}
                            <navBarMenu key={'navBarMenu_1000'} />
                            <li><a className="search"><i className="icon-search search-btn"></i></a></li>
                        </ul>
                        <div className="search-open">
                            <div className="input-append">
                                <form >
                                    <input type="text" className="span3" placeholder="Search" />
                                    <button type="submit" className="btn-u">Go</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


var HomeLogo = React.createClass({
    render: function () {
        var cssStyle = {
            height: "50px",
            width: "80px"
        }
        return (
            <div className="logo">
                <a href="#"><img id="logo-header" style={cssStyle} src="assets/img/logo-default.jpg" alt="Logo" /></a>
            </div>
        )
    }
})

var HeaderBarComp = React.createClass({
    render: function () {
        return (
            <div className="header">
                <div className="container">
                    <HomeLogo/>
                    <HomeNavBar/>
                </div>
            </div>
        )
    }
})
module.exports = HeaderBarComp;