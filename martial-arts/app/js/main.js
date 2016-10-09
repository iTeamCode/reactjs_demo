var React = require('react');
var ReactDOM = require('react-dom');

var TopBarComp = require('./components/TopBarComp.js');
var HeaderBarComp = require('./components/HeaderBarComp.js');
var MasterSliderComp = require('./components/MasterSliderComp.js');

var mainComp = ReactDOM.render(
    <div>
        <TopBarComp/>
        <HeaderBarComp/>
        <MasterSliderComp/>
        <div className="row-fluid purchase margin-bottom-30">
            <div className="container">
                <div className="span9">
                    <span>【随太极-简介】</span>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; 太极拳乃内家拳，一动无有不动。动的核心即为内动，也即丹田运动。内动而外随，通过丹田的打圈运动，引发全身特别是梢节的灵动，从而使行拳精气神灵，赏心悦目。《随太极》中的“随”是来自易经八八六十四卦中的第十七卦“随卦”。随太极乃自然之太极，天人合一之太极也！以正养身，以德修心，不违正道，诚心从善。随时顺势，择善而从，均获吉祥！太极推手中要求粘黏连随，随为跟随，相随之意。太极拳要求内外合一，上下相随。松听转棚皆体现在随中。不丢不顶，随其自然。
                    </p>
                </div>
                <a href="#" className="btn-buy hover-effect">加入随太极</a>
            </div>
        </div>

        <div className="container">

  

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




 
            <div className="headline"><h3>课程简介</h3></div>
            <ul className="thumbnails">
                <li className="span3">
                    <div className="thumbnail-style thumbnail-kenburn">
                        <div className="thumbnail-img">
                            <div className="overflow-hidden"><img src="assets/img/carousel/2.jpg" alt="" /></div>
                            <a className="btn-more hover-effect" href="#">查看详情 +</a>
                        </div>
                        <h3><a className="hover-effect" href="#">陈氏太极养生班</a></h3>
                        <p>我们相信，做礼拜的时候耶稣会在场，以此来帮助他们清洁自己的灵魂，自己过去一周的罪过，并且在接下来的一周内，有抵抗恶魔做好人的力量。</p>
                    </div>
                </li>
                <li className="span3">
                    <div className="thumbnail-style thumbnail-kenburn">
                        <div className="thumbnail-img">
                            <div className="overflow-hidden"><img src="assets/img/carousel/3.jpg" alt="" /></div>
                            <a className="btn-more hover-effect" href="#">查看详情 +</a>
                        </div>
                        <h3><a className="hover-effect" href="#">陈氏太极少儿班</a></h3>
                        <p>义工，需要有基督的爱，将真光传给世界。要成为义工必须要明白基督的信仰真谛，最好是基督徒，热心参与教会的服侍，将基督传给世人。 </p>
                    </div>
                </li>
                <li className="span3">
                    <div className="thumbnail-style thumbnail-kenburn">
                        <div className="thumbnail-img">
                            <div className="overflow-hidden"><img src="assets/img/carousel/9.jpg" alt="" /></div>
                            <a className="btn-more hover-effect" href="#">查看详情 +</a>
                        </div>
                        <h3><a className="hover-effect" href="#">陈氏太极成人班</a></h3>
                        <p>孩子是世界的未来。而主日学也关乎到教会的未来。和弟兄姐妹交流的时候，得着一个孩子，就得着了一个家庭，就得着了一个教会。</p>
                    </div>
                </li>
                <li className="span3">
                    <div className="thumbnail-style thumbnail-kenburn">
                        <div className="thumbnail-img">
                            <div className="overflow-hidden"><img src="assets/img/carousel/10.jpg" alt="" /></div>
                            <a className="btn-more hover-effect" href="#">查看详情 +</a>
                        </div>
                        <h3><a className="hover-effect" href="#">陈氏太极提高班</a></h3>
                        <p>灵粮需要每日吃，亮光需要天天照，指针需要经常用，每天阅读圣经，聆听神的话语，靠着圣灵开启心智，逐步认识并进入圣经的真理。</p>
                    </div>
                </li>
            </ul>
            <div className="row-fluid margin-bottom-20">
                <div className="span8">
                    <div className="headline"><h3>随太极简介</h3></div>
                    <p><img className="pull-left lft-img-margin img-width-200" src="assets/plugins/parallax-slider/img/1.jpg" alt="" />&nbsp; &nbsp; &nbsp; &nbsp;西安朱天才太极拳研究会 随太极是陕西省武术协会团体会员单位、西安市武术运动协会单位会员。被国家级非物质文化遗产项目（陈氏太极拳）的代表性传承人、陈氏太极拳第十一代传人、陈家沟太极拳“四大金刚”之一的朱天才大师亲自授权成立的一所集太极拳研究与传承、太极养生、太极拳技击、少儿武术为一体的综合会所。</p>
                    <ul className="unstyled">
                        <li><i className="icon-ok color-green"></i> 地址：西安市电子正街紫薇城市花园对面（怡兴大厦五楼509室）</li>
                        <li><i className="icon-ok color-green"></i> 电话：13629247575、18991270691、029-88811896</li>
                        <li><i className="icon-ok color-green"></i> 联系人：王老师</li>
                    </ul><br /> 

                    <blockquote className="hero-unify">
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; 神的教会、就是在基督耶稣里成圣、蒙召作圣徒的、以及所有在各处求告我主耶稣基督之名的人。基督是他们的主，也是我们的主。</p>
                        <small>《哥林多前书》 第一章 第 2 小节</small>
                    </blockquote>
                </div> 
  

                <div className="span4">
                    <div className="headline"><h3>师资力量</h3></div>
                    <div id="myCarousel" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="assets/img/carousel/5.jpg" alt="" />
                                <div className="carousel-caption">
                                    <p>你们要进窄门，因为引到灭亡。</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="assets/img/carousel/4.jpg" alt="" />
                                <div className="carousel-caption">
                                    <p>爱是恒久忍耐，又有恩慈。</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="assets/img/carousel/3.jpg" alt="" />
                                <div className="carousel-caption">
                                    <p>我知道我的救赎主活着，末了必站在地上。</p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-arrow">
                            <a className="left carousel-control" href="#myCarousel" data-slide="prev"><i className="icon-angle-left"></i></a>
                            <a className="right carousel-control" href="#myCarousel" data-slide="next"><i className="icon-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>,
    document.getElementById('app')
)

//2046 × 427 的长图 