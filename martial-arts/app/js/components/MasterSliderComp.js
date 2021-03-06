var React = require('react');

var ContentPannel = React.createClass({
    getDefaultProps: function () {
        return { contents: [] };
    },
    render: function () {
        var contents = this.props.contents;
        //full contents.
        var domContents = [];
        contents.forEach(function (data, index) {
            domContents.push(<i key={index}>{data}</i>);
            if (index < contents.length - 1) {
                domContents.push(<br key={'br' + index}/>);
            }
        });
        return (<h2>{domContents}</h2>);
    }
});

var MarkPannel = React.createClass({
    getDefaultProps: function () {
        return { marks: [] };
    },
    render: function () {
        var marks = this.props.marks;
        //full marks.
        var domMarks = [];
        marks.forEach(function (data, index) {
            domMarks.push(<i key={index}>{data}</i>);
            if (index < marks.length - 1) {
                domMarks.push(<br key={'br' + index}/>);
            }
        });
        return (<p>{domMarks}</p>);
    }
});

var MasterSlider = React.createClass({
    getDefaultProps: function () {
        return { sliderItems: [] }
    },
    getInitialState: function () {
        //check props.
        var _sliderItems = this.props.sliderItems || [];
        var _state = {
            sliderCount: _sliderItems.length,
            currentBgPosition: 0,
            currentIndex: 0,
            prevIndex: 0,
            moveDirection: 'none',// right or left
            isFirst: true
        };
        return _state;
    },
    componentDidMount: function () {
        this.setState({ isFirst: false });
        this.resetSliderPannel();
    },
    componentDidUpdate: function () {
        this.resetSliderPannel();
    },
    handlePrev: function () { this.changeSlider('prev') },
    handleNext: function () { this.changeSlider('next') },
    _intervalId: 0,
    resetSliderPannel: function () {
        clearInterval(this._intervalId);
        var moveNext = this.changeSlider;
        var id = setInterval(function () {
            moveNext("next");
        }, 8000);
        this._intervalId = id;
        //console.log('resetSliderPannel');
        //console.log(this._intervalId);
    },
    changeSlider: function (action) {
        var count = this.state.sliderCount
        var prev = this.state.currentIndex;
        var current = 0;
        var direction = "none";
        var bgPosition = this.state.currentBgPosition;

        switch (action) {
            case 'prev':
                current = (prev + count - 1) % count;
                direction = "right";
                bgPosition = bgPosition - 30;
                break;
            case 'next':
                current = (prev + 1) % count;
                direction = "left";
                bgPosition = bgPosition + 30;
                break;
            default:
                break;
        }
        this.setState({
            currentIndex: current,
            prevIndex: prev,
            moveDirection: direction,
            currentBgPosition: bgPosition
        });

    },
    //===> render bengin
    render: function () {
        var imgCssStyle = {
            maxHeight: '300px',
            boxShadow: ' 0 0 8px #000',
        }
        var datas = this.props.sliderItems;
        var domItems = [];
        var domDots = [];
        var _state = this.state;

        datas.forEach(function (data, index) {
            //set slider item.
            var _sliderClassName = 'da-slide';
            var _dotsClassName = '';
            if (_state.isFirst) {
                _sliderClassName += " da-slide-current";
                if (index == 0) { _dotsClassName += "da-dots-current"; }
            }
            else {
                var strFormTo = null;
                var strDirection = null;
                if (_state.currentIndex == index) {
                    _dotsClassName += "da-dots-current";
                    _sliderClassName += " da-slide-current";
                    strFormTo = "from";
                    switch (_state.moveDirection) {
                        case "right":
                            strDirection = "left";
                            break;
                        case "left":
                            strDirection = "right";
                            break;
                        default: break;
                    }
                }
                else if (_state.prevIndex == index) {
                    strFormTo = "to";
                    strDirection = _state.moveDirection;
                }

                //da-slide-fromright , da-slide-fromleft , da-slide-toright , da-slide-toleft
                _sliderClassName += " da-slide-" + strFormTo + strDirection;
            }

            domItems.push(
                <div key={'divSlide_' + index} className={_sliderClassName}>
                    <ContentPannel key={'homeContent_' + index} contents={data.contents}/>
                    <MarkPannel key={'homeMark_' + index} marks={data.marks}/>
                    <div className="da-img"><img src={data.imageUrl} alt="" style={imgCssStyle} /></div>
                </div>
            );

            //set slider item.
            domDots.push(<span key={'dots_' + index} className={_dotsClassName}></span>)
        });

        var _cssStyle = { backgroundPosition: this.state.currentBgPosition + '% 0%' }
        return (
            <div className="slider-inner">
                <div id="da-slider" className="da-slider" style={_cssStyle}>
                    {domItems}
                    <nav className="da-arrows">
                        <span className="da-arrows-prev" onClick={this.handlePrev }></span>
                        <span className="da-arrows-next" onClick={this.handleNext }></span>
                    </nav>
                    <nav className="da-dots">
                        {domDots}
                    </nav>
                </div>
            </div>
        )
    }//===> render end
});

module.exports = MasterSlider;