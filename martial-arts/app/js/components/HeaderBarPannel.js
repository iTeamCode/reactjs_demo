var React = require('react');

var NavBarMenu = React.createClass({
    getDefaultProps: function () {
        return {
            menuData: {},
            callbackClick: function (mainCode) { }
        };
    },
    handleSubMenuClick: function () {
        //var funcCallback = this.props.callbackClick;
        //console.log(this);

    },
    handleMainMenuClick: function (event) {
        var mainCode = Number(event.currentTarget.attributes['data-mainCode'].value);
        //var funcCallback = this.props.callbackClick;
        console.log(this.props.callbackClick);
        //funcCallback(mainCode);
        this.props.callbackClick(mainCode);
    },
    setActiveMenu: function (code) {

    },
    render: function () {
        var menuData = this.props.menuData || [];   //menu data 
        var subMenus = menuData.subMenus || [];   //subMenus arrays

        var domSubMenu = [];
        for (var i = 0; i < subMenus.length; i++) {
            domSubMenu.push(
                <li key={"subMenu_" + i} onClick={this.handleSubMenuClick} data-subCode={subMenus[i].code} > <a href="#">{subMenus[i].text}</a></li >
            );
        }

        var domOutput = null;
        if (subMenus != null) {
            var cssStyle = "";
            cssStyle += menuData.isActived ? ' active' : '';
            cssStyle += menuData.showSubMenu ? ' open' : '';
            if (subMenus.length > 0) {
                domOutput = (
                    <li className={cssStyle}>
                        <a href="#" onClick={this.handleMainMenuClick} className="dropdown-toggle" data-toggle="dropdown" data-mainCode={menuData.code} >{menuData.text}
                            <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu">{domSubMenu}</ul>
                        <b className="caret-out"/>
                    </li>
                )
            }
            else {
                domOutput = (
                    <li className={cssStyle}>
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">{menuData.text}
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
    getInitialState: function () {
        var _menuDatas = [
            {
                code: 1000,
                text: '首页',
                isActived: true,
                showSubMenu: false,
                subMenus: []
            }, {
                code: 1001,
                text: '活动',
                subMenus: [
                    { code: 1, text: '每日签到' },
                    { code: 2, text: '套路练习' }
                ]
            }, {
                code: 1002,
                text: '拳谱',
                isActived: false,
                showSubMenu: false,
                subMenus: [
                    { code: 1, text: '陈氏太极13式' },
                    { code: 2, text: '老架一路' },
                    { code: 3, text: '老架二路' }
                ]
            }, {
                code: 1003,
                text: '圈子拳谱',
                isActived: false,
                showSubMenu: false,
                subMenus: [
                    { code: 1, text: '每日推荐' },
                    { code: 2, text: '习武感悟' },
                    { code: 3, text: '武林资讯' }
                ]
            }, {
                code: 1004,
                text: '修行之路',
                isActived: false,
                showSubMenu: false,
                subMenus: [
                    { code: 1, text: '个人信息' },
                    { code: 2, text: '我的活动' },
                    { code: 3, text: '我的修行' }
                ]
            }, {
                code: 1005,
                text: '关于我们',
                isActived: false,
                showSubMenu: false,
                subMenus: [
                    { code: 1, text: '随太极简介' },
                    { code: 2, text: '网站建设' },
                    { code: 3, text: '加入我们' }
                ]
            }
        ]

        return {
            iActivedMainCode: 0,
            iActivedSubCode: 0,
            menuDatas: _menuDatas
        };
    },
    handleClickMainMenu: function (mainCode) {
        var _menuDatas = this.state.menuDatas;
        _menuDatas.forEach(function (data, index) {
            //data.isActived = (mainCode == data.code);
            data.showSubMenu = (mainCode == data.code);
        })
        this.setState({
            iActivedMainCode: mainCode,
            menuDatas: _menuDatas
        })
    },
    render: function () {
        var navData = this.state.menuDatas;
        var domMenu = new Array();
        var funcCallback = this.handleClickMainMenu;
        navData.forEach(function (item, index) {
            domMenu.push(
                <NavBarMenu key={'navBarMenu_' + index} menuData={item} callbackClick={funcCallback} />
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

var HeaderBarPannel = React.createClass({
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
module.exports = HeaderBarPannel;