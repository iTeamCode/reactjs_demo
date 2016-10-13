var React = require('react');
var ReactDOM = require('react-dom');

var TopBarComp = require('./components/TopBarComp.js');
var HeaderBarPannel = require('./components/HeaderBarPannel.js');
var MasterSliderComp = require('./components/MasterSliderComp.js');
var JoinUsPanel = require('./components/JoinUsPanel.js');
var FunctionPanel = require('./components/FunctionPanel.js');
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

var _joinUs = {
    title: '【大道至简】',
    contentText: '太极拳乃内家拳，一动无有不动。动的核心即为内动，也即丹田运动。内动而外随，通过丹田的打圈运动，引发全身特别是梢节的灵动，从而使行拳精气神灵，赏心悦目。《随太极》中的“随”是来自易经八八六十四卦中的第十七卦“随卦”。随太极乃自然之太极，天人合一之太极也！以正养身，以德修心，不违正道，诚心从善。随时顺势，择善而从，均获吉祥！太极推手中要求粘黏连随，随为跟随，相随之意。太极拳要求内外合一，上下相随。松听转棚皆体现在随中。不丢不顶，随其自然。',
    buttonText: '加入随太极'
};
 
var _servicePoints = [
    {
        title: '修练签到',
        content: '人生，本就是一场修行。而随太极为我们指明了方向。俗语有云“习武者：冬，需不惧三九之寒。夏，要无畏三伏之炙”。勿忘初心，方得始终... ...',
        btnStyle: 'icon-edit',
        onClick: function () { }
    }, {
        title: '太极江湖',
        content: '太极的江湖，是祥和，淡雅的江湖。这里没有影视作品里的刀光剑影... ...取而代之的是对太极的执念和为传承的坚持。',
        btnStyle: 'icon-group',
        onClick: function () { }
    }, {
        title: '功法讲坛',
        content: '武术之于我们，或是年少时的梦想，亦或是不惑之年的消遣。无论何时起步，你将会遇见的不仅仅是温和，谦虚的拳友。在太极之路尽头等着你的，是那个最好的自己... ...',
        btnStyle: 'icon-pinterest-sign',
        onClick: function () { }
    }
];  
var mainComp = ReactDOM.render(
    <div>
        <TopBarComp/> 
        <HeaderBarPannel/>
        <MasterSliderComp sliderItems={_sliderItems}/>
        <JoinUsPanel title={_joinUs.title} contentText={_joinUs.contentText} buttonText={_joinUs.buttonText}/>
        <div className="container">
            <div className="headline"><h3>随太极-圈子</h3></div>
            <FunctionPanel servicePoints={_servicePoints}/>
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