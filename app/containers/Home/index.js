import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Carousel from './carousel'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {hashHistory} from  'react-router'

class Home extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()

    };
    submitHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    };
    render(){
        return(
            <div>
                <Header value={""} submitHandle={this.submitHandle.bind(this)}/>
                <Carousel />
            </div>
        )
    }
}

//使用 require.ensure 异步加载， 还不支持 ES6 的 export
//export default NotFound
module.exports = Home;