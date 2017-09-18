import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/AppActions';

import PureRenderMixin from 'react-addons-pure-render-mixin'
import Footer from '../../components/Footer';
import  FormInstance from "../../components/Form/formRegister.jsx";


class Register extends React.Component {
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
                    <div><a href="/home">logo</a></div>
                </header>
                <div>
                    < FormInstance data={formState} dispatch={dispatch} location={location} history={this.props.history} onSubmit={::this._register} btnText={"Register"} currentlySending={currentlySending}/>
                </div>
                <Footer />
            </div>
        )
    }
    _register(username, password) {
        this.props.dispatch(register(username, password));
    }
}

// Which props do we want to inject, given the global state?
function select(state) {
    return {
        data: state
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Register);