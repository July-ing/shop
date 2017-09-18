import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Button} from 'react-bootstrap'
import {hashHistory} from 'react-router'
export default class ShowDetail extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state = {
            yanse:-1,
            chima:-1,
            shuliang: 1
        }
    }
    componentWillMount(){

    }
    render(){
        const data = this.props.data;
        console.log("sss");
        console.log(data);

        const color = data.yanse.map((item,index) => {
            var style;
            style = {
                backgroundImage: "url('" + item +"')"
            }
            var cn = this.state.yanse === index ? " active":"";
            cn = cn + " color"
            return <div className={cn} style={style} key={index} onClick={this.changeYanseHandler.bind(this,item,index)}></div>

        })
        const chima = data.chima.map((item,index) => {
            var cn = this.state.chima === index ? " active":"";
            cn = cn + " chima"
            return <div className={cn} key={index} onClick={this.changeChimaHandler.bind(this,item,index)}>{item}</div>
        })
        return(
            <div className="container contain-comm">
                <div className="left"><img src={data.show[0]} alt={data.name} ref="image"/></div>
                <div className="right">
                    <h2>{data.name}</h2>
                    <div className="jx">
                        <label>价格：</label><div className="jiage">￥{data.jiage}</div>
                        <div className="fr"><label>销量：</label><span>{data.xiaoliang}</span></div>

                    </div>
                    <div>
                        {data.yanse.length ? <div><label>颜色：</label><div className="con">{color}</div></div>:""}
                        {data.chima.length ? <div><label>尺码：</label><div className="con">{chima}</div></div>:""}
                        <label>数量：</label><div><em className="ope" onClick={this.downHandler.bind(this)}>-</em><em  className="cnt">{this.state.shuliang}</em><em className="ope" onClick={this.upHandler.bind(this)}>+</em></div><span>库存{data.kucun}件</span>
                    </div>
                    <Button onClick={this.buyHandler.bind(this)}>立即购吗</Button><Button onClick={this.addHandler.bind(this)}>加入购物车</Button>

                </div>
            </div>
        )
    }
    changeYanseHandler(url,index,evt){
        this.setState({
            yanse:index
        })
        var image = this.refs.image;
        image.src = url;
    }
    changeChimaHandler(url,index,evt){
        this.setState({
            chima:index
        })

        console.log(evt.target);
    }
   upHandler(){
       const sl = this.state.shuliang;
       this.setState({
           shuliang: sl+1
       })
   }
    downHandler(){
        const sl = this.state.shuliang;
        this.setState({
            shuliang: sl-1
        })
    }
    check(){
        var yanse = this.props.data.yanse.length?false:true;
        var chima = this.props.data.chima.length?false:true;
        var shuliang = false;
        if(this.state.yanse >= 0 && this.state.yanse < this.props.data.yanse.length){
            yanse = true;
        }
        if(this.state.chima >= 0 && this.state.chima < this.props.data.chima.length){
            chima = true;
        }
        if(this.state.shuliang > 0 && this.state.shuliang <= this.props.data.kucun){
            shuliang = true;
        }
        if(yanse && shuliang && chima){
            return true;
        }else{
            alert("请重新选择！")
            return false;
        }
    }
    buyHandler(){
        if(this.check()) {
            console.log(this.props.userinfo.loggedIn);
            if (this.props.userinfo.loggedIn) {
                console.log(this.state.chima);
                const result = this.props.buy(this.props.id, this.state.shuliang, this.state.chima, this.state.yanse);
                result.then(res => {
                    return res.json()
                }).then(json => {
                    console.log(json.ensure)
                    if (json.ensure) {
                        hashHistory.push('/pay');
                    } else {
                        alert("购买失败！可能您要的宝贝已经没有了哦，手慢无嘛~")
                    }

                })

            }
            else {
                hashHistory.push('/user/login');
            }
        }
    }
    addHandler(){

    }
}

