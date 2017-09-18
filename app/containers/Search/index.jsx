import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from  'react-router'
import ShowComm from './ShowComm'
import Header from '../../components/Header';


export default class Search extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state = {
            keyword:'',
            category:''
        }
    }
    componentWillMount(){
        const params = this.props.params;
        this.setState({
            keyword: params.keyword,
            category: params.category
        })
    }
    submitHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value));

    }
    render(){
        return(
            <div>
                <Header  category = {this.state.category} keyword={this.state.keyword} submitHandle={this.submitHandle.bind(this)}/>
                <ShowComm category = {this.state.category} keyword={this.state.keyword}/>

            </div>
        )
    }
}

//使用 require.ensure 异步加载， 还不支持 ES6 的 export
//export default NotFound
