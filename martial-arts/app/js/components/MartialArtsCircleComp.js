var React = require("react");


var MartialArtsCircle = React.createClass({
    render: function () {
        return (
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
        )
    }
});


module.exports = MartialArtsCircle;