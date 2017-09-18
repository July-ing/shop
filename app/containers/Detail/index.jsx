import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import auth  from '../../util/auth'
import ShowDetail from './ShowDetail'
import { connect } from 'react-redux';
import  './style.less'

 class Detail extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state = {
            id:0,
            data:{},
            loading:true,
        }
    }
    componentDidMount(){
        const params = this.props.params;
        //this.setState({
        //    keyword: params.keyword,
        //    category: params.category
        //})
        this.setState({id:params.id});
        console.log(this.state.id);
        const result = auth.showComm(params.id);
        this.resultHandle(result);
    }
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            console.log(json);
            this.setState({
                data: json,
                loading:false
            })

        })
        console.log("willmount");
        console.log(this.state.data);
    }
     buy(id, shuliang, chicun, yanse){
         const result = auth.buycheck(id, shuliang, chicun, yanse);
         return result;
     }
    render(){
        console.log("length")
        console.log(this.state.data);
        return(
            <div>
                {!this.state.loading ? <ShowDetail check={this.state.check} userinfo={this.props.userinfo.reducers} buy={this.buy.bind(this)} data={this.state.data} id={this.state.id}/>: <div>加载中...</div>}

            </div>
        )
    }
}

function select(state) {
    return {
        userinfo: state
    };
}
export default connect(select)(Detail);