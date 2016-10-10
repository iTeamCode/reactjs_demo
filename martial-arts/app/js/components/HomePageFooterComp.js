var React = require("react");


var HomePageFooter = React.createClass({
    render: function () {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row-fluid">
                        <div className="span4">
                            <div className="headline"><h3>关于陈氏太极</h3></div>
                            <p className="margin-bottom-25">陈氏太极拳，是太极拳最原始的拳种，是陈王廷集老子阴阳学说创编而成，陈家十四世陈长兴将秘不外传的陈氏太极拳传给了杨露禅，后来陈氏太极拳分成了杨、吴、武、孙、赵堡 五大流派。</p>
                            <div className="headline"><h3>关注我们</h3></div>
                            <p>订阅我们，了解最新活动，了解更多太极知识！</p>
                            <form className="form-inline" >
                                <div className="input-append">
                                    <input type="text" placeholder="邮箱地址" className="input-medium" />
                                    <button className="btn-u">订阅</button>
                                </div>
                            </form>
                        </div>

                        <div className="span4">
                            <div className="posts">
                                <div className="headline"><h3>最新知识分享</h3></div>
                                <dl className="dl-horizontal">
                                    <dt><a href="#"><img src="assets/img/sliders/elastislide/6.jpg" alt="" /></a></dt>
                                    <dd>
                                        <p><a href="#">陈式太极拳有着其他太极流派没有的招式套路如跳跃，腾空，跌岔，震脚等。</a></p>
                                    </dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt><a href="#"><img src="assets/img/sliders/elastislide/10.jpg" alt="" /></a></dt>
                                    <dd>
                                        <p><a href="#">陈式太极拳有陈式老架、新架之分。老架由清初河南温县陈家沟陈王廷所创。</a></p>
                                    </dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt><a href="#"><img src="assets/img/sliders/elastislide/11.jpg" alt="" /></a></dt>
                                    <dd>
                                        <p><a href="#">陈式太极拳虽有小架、大架之分，但其运动特点基本一致：其在内是意气运动，在外是螺旋缠绕运动。</a></p>
                                    </dd>
                                </dl>
                            </div>
                        </div>

                        <div className="span4">

                            <div className="headline"><h3>联系我们</h3></div>
                            <address>
                                地址：西安市电子正街怡兴大厦五楼509室 <br />
                                电话：13629247575、18991270691、029-88811896 <br />
                                联系人：王老师 <br />
                                传真: 029-88811896 <br />
                                邮箱: <a href="mailto:info@anybiz.com" className="">info @anybiz.com</a>
                            </address>


                            <div className="headline"><h3>分享</h3></div>
                            <ul className="social-icons">
                                <li><a href="#" data-original-title="Feed" className="social_rss"></a></li>
                                <li><a href="#" data-original-title="Facebook" className="social_facebook"></a></li>
                                <li><a href="#" data-original-title="Twitter" className="social_twitter"></a></li>
                                <li><a href="#" data-original-title="Goole Plus" className="social_googleplus"></a></li>
                                <li><a href="#" data-original-title="Pinterest" className="social_pintrest"></a></li>
                                <li><a href="#" data-original-title="Linkedin" className="social_linkedin"></a></li>
                                <li><a href="#" data-original-title="Vimeo" className="social_vimeo"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = HomePageFooter;