import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Footer from "../components/Footer";
import Nav from "../components/Header/nav.jsx";
import { connect } from 'react-redux';


 class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()

    }

    render() {
        return (
            <div>
                <Nav loggedIn={this.props.data.reducers.loggedIn} history={this.props.history} username = {this.props.data.reducers.formState.username} location={this.props.location} dispatch={this.props.dispatch} currentlySending={this.props.data.reducers.currentlySending} />
                {this.props.children}
                <Footer />
            </div>
        )
    }

}

function select(state) {
    return {
        data: state
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
