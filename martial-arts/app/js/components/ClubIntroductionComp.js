var React = require("react");


var ClubIntroduction = React.createClass({
    render: function () {
        return (
            <div className="span8">
                <div className="headline"><h3>随太极-简介</h3></div>
                <p><img className="pull-left lft-img-margin img-width-200" src="assets/plugins/parallax-slider/img/1.jpg" alt="" />&nbsp; &nbsp; &nbsp; &nbsp; 西安朱天才太极拳研究会 随太极是陕西省武术协会团体会员单位、西安市武术运动协会单位会员。被国家级非物质文化遗产项目（陈氏太极拳）的代表性传承人、陈氏太极拳第十一代传人、陈家沟太极拳“四大金刚”之一的朱天才大师亲自授权成立的一所集太极拳研究与传承、太极养生、太极拳技击、少儿武术为一体的综合会所。</p>
                <ul className="unstyled">
                    <li><i className="icon-ok color-green"></i> 地址：西安市电子正街紫薇城市花园对面（怡兴大厦五楼509室）</li>
                    <li><i className="icon-ok color-green"></i> 电话：13629247575、18991270691、029-88811896</li>
                    <li><i className="icon-ok color-green"></i> 联系人：王老师</li>
                </ul><br />

                <blockquote className="hero-unify">
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; 太极拳，是以中国传统儒、道哲学中的太极、阴阳辩证理念为核心思想，集颐养性情、强身健体、技击对抗等多种功能为一体，结合易学的阴阳五行之变化，中医经络学，古代的导引术和吐纳术形成的一种内外兼修、柔和、缓慢、轻灵、刚柔相济的中国传统拳术。</p>
                    <small>摘自《百度百科》 第一章 第 1 小节</small>
                </blockquote>
            </div>
        )
    }
});


module.exports = ClubIntroduction;