import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Carousel } from "react-bootstrap";
import { getCarouselDate } from  "../../fetch/Home/home.js"

export default class ControlledCarousel extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0,
            direction: null,
            timer:null

    }
    };


    componentWillUnmount() {
        window.clearInterval(this.timer);
    }
    handleSelect(selectedIndex, e) {
        if(e == null){
           // alert('selected=' + selectedIndex + ', direction=next');
            this.setState({
                index: selectedIndex,
                direction: "next"
            });
        }else {
            console.log(e.direction);
            //alert('selected=' + selectedIndex + ', direction=' + e.direction);
            this.setState({
                index: selectedIndex,
                direction: e.direction
            });
        }
    };

    render() {
        return (
            <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect.bind(this)}>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="./app/img/banner1.jpg"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="/./app/img/banner2.jpg"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="/./app/img/banner4.jpg"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

    componentDidMount() {
        //const result = getCarouselDate();
        //console.log(result);
        this.timer = setInterval(function () {
            this.handleSelect((this.state.index + 1) % 3)
        }.bind(this), 2000);

    }
};
