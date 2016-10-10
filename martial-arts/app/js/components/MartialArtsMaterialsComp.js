var React = require("react");


var MartialArtsMaterials = React.createClass({
    render: function () {
        return (
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
        )
    }
});


module.exports = MartialArtsMaterials;