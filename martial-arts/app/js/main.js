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

var mainComp = ReactDOM.render(
    <div>
        <TopBarComp/>
        <HeaderBarComp/> 
        <MasterSliderComp/>
        <JoinUsComp/>
        <div className="container">
            <div className="headline"><h3>随太极-圈子</h3></div>
            <FunctionPanelComp/> 
            <MartialArtsCircleComp/>
            <div className="row-fluid margin-bottom-20">
                <ClubIntroductionComp/>
                <MartialArtsMaterialsComp/>
            </div>
        </div>
        <HomePageFooterComp/>
    </div>,
    document.getElementById('app')
) 