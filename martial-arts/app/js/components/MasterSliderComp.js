var React = require('react');

var MasterSlider = React.createClass({
    render: function () {
        var cssStyle01 = {
            maxHeight: '300px',
            boxShadow: ' 0 0 8px #000',
        }

        var cssStyle02 = {
            maxHeight: '300px',
            boxShadow: ' 0 0 8px #000',
        }

        var cssStyle03 = {
            maxHeight: '310px',
            boxShadow: ' 0 0 8px #000',
        }
        return (
            <div className="slider-inner">
                <div id="da-slider" className="da-slider">
                    <div className="da-slide">
                        <h2><i>泽雷随，内动外悦，人愿随从。</i><br /> <i>&nbsp; &nbsp; &nbsp; &nbsp; 内动之以德，外悦之以言</i> <br /> <i>则天下之人咸慕其行而随从之</i> </h2>
                        <p><i>《易经》</i>  <i>第九十篇 - 第 9 节</i> </p>
                        <div className="da-img"><img src="assets/plugins/parallax-slider/img/taiji-01.jpg" alt="" style={cssStyle01} /></div>
                    </div>
                    <div className="da-slide">
                        <h2><i>君道众随，择善为正</i> <br /> <i>&nbsp; &nbsp; &nbsp; &nbsp; 舍己随人，随时顺势</i></h2>
                        <p><i>《易经》</i> <br /> <i>第八章 - 第 12 节</i></p>
                        <div className="da-img"><img src="assets/plugins/parallax-slider/img/taiji-02.jpg" alt="image01" style={cssStyle01}/></div>
                    </div>
                    <div className="da-slide">
                        <h2><i>随太极乃自然之太极。</i> <br /> <i>天人合一之太极也！</i></h2>
                        <p><i>《随太极》</i> <br /> <i>第一章 第 4 至 5 小节</i> </p>
                        <div className="da-img"><img src="assets/plugins/parallax-slider/img/taiji-03.jpg" alt="image01" style={cssStyle01}/></div>
                    </div>
                    <nav className="da-arrows">
                        <span className="da-arrows-prev"></span>
                        <span className="da-arrows-next"></span>
                    </nav>
                </div>
            </div>
        )
    }
});


module.exports = MasterSlider;