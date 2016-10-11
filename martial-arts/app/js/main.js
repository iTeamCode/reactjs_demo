var React = require('react');
var ReactDOM = require('react-dom');

var TopBarComp = require('./components/TopBarComp.js');
var HeaderBarComp = require('./components/HeaderBarComp.js');
var MasterSliderComp = require('./components/MasterSliderComp.js');
var JoinUsComp = require('./components/JoinUsComp.js');
var FunctionPanelComp = require('./components/FunctionPanelComp.js');
var MartialArtsCircleComp = require('./components/MartialArtsCircleComp.js');
var ClubIntroductionComp = require('./components/ClubIntroductionComp.js');
var MartialArtsMaterialsComp = require('./components/MartialArtsMaterialsComp.js');
var HomePageFooterComp = require('./components/HomePageFooterComp.js');


var _sliderItems = [
    {
        contents: ['泽雷随，内动外悦，人愿随从。', '内动之以德，外悦之以言', '则天下之人咸慕其行而随从之。'],
        marks: ['《易经》', '第九十篇 - 第 9 节'],
        imageUrl: 'assets/plugins/parallax-slider/img/taiji-01.jpg'
    },
    {
        contents: ['君道众随，择善为正', '舍己随人，随时顺势。'],
        marks: ['《易经》', '第八章 - 第 12 节'],
        imageUrl: 'assets/plugins/parallax-slider/img/taiji-02.jpg'
    },
    {
        contents: ['随太极乃自然之太极。', '天人合一之太极也！'],
        marks: ['《随太极》', '第一章 第 4 至 5 小节'],
        imageUrl: 'assets/plugins/parallax-slider/img/taiji-03.jpg'
    }
];
var mainComp = ReactDOM.render(
    <div>
        <TopBarComp/>
        <HeaderBarComp/>
        <MasterSliderComp sliderItems={_sliderItems}/>
        <JoinUsComp/>
        <div className="container">
            <div className="headline"><h3>随太极-圈子</h3></div>
            <FunctionPanelComp/>
            <MartialArtsCircleComp />
            <div className="row-fluid margin-bottom-20">
                <ClubIntroductionComp/>
                <MartialArtsMaterialsComp/>
            </div>
        </div>
        <HomePageFooterComp/>
    </div>,
    document.getElementById('app')
)