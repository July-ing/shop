import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import "./style.less"

export default class LoadMore extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    render(){
        const data=this.props.data;
        return(
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                        :<span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }

            </div>
        )
    }

    loadMoreHandle(){
        this.props.loadMoreFn();
    };
    componentDidMount(){
        //滑动
        //const loadMoreFn = this.props.loadMoreFn();
        //const wrapper = this.refs.wrapper;
        //let timeoutId;
        //function callback(){
        //    console.log("callback");
        //    const top =wrapper.getBoundingClientRect();
        //    const windowHeight = window.screen.height;
        //    if(top && top < windowHeight){
        //        //当 wrapper 暴露在页面上
        //        console.log("暴露");
        //
        //        loadMoreFn();
        //    }
        //}
        //
        //window.addEventListener("scroll", function () {
        //    if(this.props.isLoadingMore){
        //        return
        //    }
        //    console.log("huadong");
        //    if(timeoutId){
        //        clearTimeout(timeoutId)
        //    }
        //    timeoutId = setTimeout(callback,50)
        //}.bind(this),false)
    }
}

