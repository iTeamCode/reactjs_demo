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
                    <span>【大道至简】</span>
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





            <div className="headline"><h3>随太极-圈子</h3></div>
            <ul className="thumbnails">
                <li className="span3">
                    <div className="thumbnail-style thumbnail-kenburn">
                        <div className="thumbnail-img">
                            <div className="overflow-hidden"><img src="assets/img/carousel/2.jpg" alt="" /></div>
                            <a className="btn-more hover-effect" href="#">查看详情 +</a>
                        </div>
                        <h3><a className="hover-effect" href="#">太极与处事之道</a></h3>
                        <p>太极拳名家陈发科曾说过："为人之道，以忠实为主；处世之法，以谦和为主。不忠实则无信用；不谦虚则难以进步；不和气则无朋友"。太极，更重要的是修炼如何做人。</p>
                    </div>
                </li>
                <li className="span3">
                    <div className="thumbnail-style thumbnail-kenburn">
                        <div className="thumbnail-img">
                            <div className="overflow-hidden"><img src="assets/img/carousel/3.jpg" alt="" /></div>
                            <a className="btn-more hover-effect" href="#">查看详情 +</a>
                        </div>
                        <h3><a className="hover-effect" href="#">一年四季最适合练太极的时间</a></h3>
                        <p>人与自然是一个整体，一年四季气候的变化，具有客观规律性，而人类活动和万物生化都要遵循这一客观规律。《素问.宝命全形论》：“人以天地之气生，四时之法成。”</p>
                    </div>
                </li>
                <li className="span3">
                    <div className="thumbnail-style thumbnail-kenburn">
                        <div className="thumbnail-img">
                            <div className="overflow-hidden"><img src="assets/img/carousel/9.jpg" alt="" /></div>
                            <a className="btn-more hover-effect" href="#">查看详情 +</a>
                        </div>
                        <h3><a className="hover-effect" href="#">太极慢生活</a></h3>
                        <p>在陈家沟太极拳祖祠里有三道门：招熟、懂劲、神明，这也是陈式太极拳习练的三个阶段。由招熟而渐悟懂劲, 由懂劲而阶及神明。</p>
                    </div>
                </li>
                <li className="span3">
                    <div className="thumbnail-style thumbnail-kenburn">
                        <div className="thumbnail-img">
                            <div className="overflow-hidden"><img src="assets/img/carousel/10.jpg" alt="" /></div>
                            <a className="btn-more hover-effect" href="#">查看详情 +</a>
                        </div>
                        <h3><a className="hover-effect" href="#">练太极需要克服的10大心魔</a></h3>
                        <p>太极拳的修炼过程也是一个克服种种心魔的过程。其中最主要的心魔有十个方面。那么该怎么克服这些心魔呢？练习太极拳只有克服了十大心魔，才能获得正确的心法，沿着正确的大方向不断进步。</p>
                    </div>
                </li>
            </ul>
            <div className="row-fluid margin-bottom-20">
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


                <div className="span4">
                    <div className="headline"><h3>功法秘籍</h3></div>
                    <div id="myCarousel" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="assets/img/carousel/5.jpg" alt="" />
                                <div className="carousel-caption">
                                    <p>太极拳的八种劲</p>
                                </div>
                            </div>

                            <div className="item">
                                <img src="assets/img/carousel/3.jpg" alt="" />
                                <div className="carousel-caption">
                                    <p>“彼未动，己先动”</p>
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

    </div>,
    document.getElementById('app')
)