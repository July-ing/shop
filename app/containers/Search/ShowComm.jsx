import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import auth from '../../util/auth'
import Comm from '../../components/Comm';
import LoadMore from '../../components/LoadMore'

export default class ShowComm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[],
            hasMore: false,
            isLoadingMore: false,
            page: 1
        }
    };
    componentDidMount(){
        this.loadFirstPageData();

    }
    loadFirstPageData() {
        const category = this.props.category;
        const keyword = this.props.keyword;
        const result = auth.search(category,keyword,0);
        this.resultHandle(result);

    }
    loadMoreData() {
        //记录状态
        this.setState({
            isLoadingMore: true
        })
        const category = this.props.category;
        const keyword = this.props.keyword;
        const page = this.state.page;
        const result = auth.search(category,keyword,page);
        this.resultHandle(result);

        //增加page计数
        this.setState({
            page:page+1,
            isLoadingMore:false
        })

    }
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            console.log(json);

            const hasMore = json.hasMore;
            const data = json.data;
            this.setState({
                hasMore:hasMore,
                data:this.state.data.concat(data)
            })
        })
    }


    render() {
        const data = this.state.data;
        console.log(data);
        return (
            <div>
                {this.state.data.length
                    ? <Comm data={data} />
                    : <div>加载中...</div>}
                <div>
                    {this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>:''}
                </div>
            </div>
        );
    };

}