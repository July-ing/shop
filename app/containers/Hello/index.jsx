import * as userinfoActions from '../../actions/userinfo';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import A from '../../components/A';
import B from '../../components/B';
import C from '../../components/C';

class Hello extends React.Component{
    render() {
        return (
            <div>
                <p>hello world</p>
                <hr/>
                <A userinfo = {this.props.userinfo}></A>
                <hr/>
                <B userinfo = {this.props.userinfo}></B>
                <hr/>
                <C actions = {this.props.userinfoActions}></C>
            </div>
        )
    };
    componentDidMount() {
        // 模拟登陆
        this.props.userinfoActions.login({
            userid:'abc',
            city: 'beijing'
        });
    };

}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions,dispatch)
    }
}
export default connect(
    mapStateToProps,
        mapDispatchToProps
)(Hello)