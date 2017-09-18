import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Footer from '../../components/Footer';
import FormInstance from "../../components/Form/formLogin.jsx";
import { Link } from 'react-router';
import { login } from '../../actions/AppActions'
class LoginPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()

    }
    render(){
        const dispatch = this.props.dispatch;
        const { formState, currentlySending } = this.props.data.reducers;
        console.log("indexpage");
        console.log(formState);
        return(
            <div>
                <header>
                    <div><Link to="/home">logo</Link></div>
                </header>
                <div>
                    <FormInstance data={formState}  btnText={"Login"} currentlySending={currentlySending} dispatch={dispatch} location={location} history={this.props.history} onSubmit = {this.loginHandle.bind(this)}/>
                </div>
                <Footer />
            </div>
        )
        //登陆成功

    }
    loginHandle(username, password){
       this.props.dispatch(login(username, password));
    }
}

// Which props do we want to inject, given the global state?
function select(state) {
    return {
        data: state
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(LoginPage);