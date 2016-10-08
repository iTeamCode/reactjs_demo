var React = require('react');

var navBarMenu = React.createClass({
    getDefaultProps:function(){
        return {menuTitle:'',subMenus:[]};
    },
    render:function(){
        var title = this.props.menuTitle;   //title 
        var subMenus = this.props.subMenus;   //subMenus arrays

        var domSubMenu = [];
        for(var i = 0 ; i < subMenus.length ; i++)
        {
            domSubMenu.push(
                <li><a href="#">{subMenus[i].title}</a></li>
            );
        }

        return (
            <li className={title=='首页'?'active':''}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">{title}
                    <b className="caret"></b>
                </a>
                {domSubMenu}
                <ul className="dropdown-menu">{subMenu}</ul>
                <b className="caret-out"></b>
            </li>
        );
    }
});

var navBarMenu1 = React.createClass({
    
    render:function(){

        return (
            <li>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">{title}
                    <b className="caret"></b>
                </a>
                <li><a href="#">AAAAAAAAAAAAAAA</a></li>
                <li><a href="#">AAAAAAAAAAAAAAA</a></li>
                <li><a href="#">AAAAAAAAAAAAAAA</a></li>
                <li><a href="#">AAAAAAAAAAAAAAA</a></li>
                <ul className="dropdown-menu">{subMenu}</ul>
                <b className="caret-out"></b>
            </li>
        );
    }
});


var navBar = React.createClass({
    render: function () {
        var navData = [
            {title:'首页', subMenus:[]},
            {title:'活动', subMenus:['每日签到','套路练习']},
            {title:'拳谱', subMenus:['陈氏太极13式','老架一路','老架二路']},
            {title:'文章', subMenus:['每日推荐','习武感悟','武林资讯']},
            {title:'拳友', subMenus:['个人信息','我的活动','我的修行']},
        ];

        var domMenu = new Array();
        navData.forEach(function(item,index){
            domMenu.push(
                //<navBarMenu key={'navBarMenu_'+index} menuTitle={item.title} subMenus={item.subMenus} />
                <navBarMenu1 key={'navBarMenu_'+index} />
            );
        })
        return (
            <div className="navbar">
                <div className="navbar-inner">
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

module.exports = navBar;