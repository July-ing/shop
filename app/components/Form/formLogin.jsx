import React from 'react';
import { changeForm } from '../../actions/AppActions';
import LoadingButton from '../Loading/LoadingButton.react';
import ErrorMessage from '../Error/ErrorMessage.react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Form, FormGroup, Col, FormControl,Button,Checkbox,ControlLabel} from 'react-bootstrap';

const assign = Object.assign || require('object-assign');

export default class FormLogin extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate();


    }
    render() {
        //console.log(this);
        return (
            <Form horizontal onSubmit={this._onSubmit.bind(this)}>
                <ErrorMessage />
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        邮件
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email"  placeholder="Email"
                                     onChange={this._changeUsername.bind(this)} defaultValue=""/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        密码
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" defaultValue=""
                                     onChange={this._changePassword.bind(this)}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>记住我</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        {this.props.currentlySending ? (
                            <LoadingButton />
                        ) : (
                            <Button type="submit">{this.props.btnText}</Button>
                        )}
                    </Col>
                </FormGroup>
            </Form>
        );
    }

    // Change the username in the app state
    _changeUsername(evt) {
        var newState = this._mergeWithCurrentState({
            username: evt.target.value
        });

        this._emitChange(newState);
    };

    _changePassword(evt) {
        var newState = this._mergeWithCurrentState({
            password: evt.target.value
        });

        this._emitChange(newState);
    };
    // Merges the current state with a change
    _mergeWithCurrentState(change) {
        return assign(this.props.data, change);
    }

    // Emits a change of the form state to the application state
    _emitChange(newState) {
        this.props.dispatch(changeForm(newState));
    }

    // onSubmit call the passed onSubmit function
    _onSubmit(evt) {
        evt.preventDefault();
        this.props.onSubmit(this.props.data.username, this.props.data.password);
    }
}

FormLogin.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    btnText: React.PropTypes.string.isRequired,
    data: React.PropTypes.object.isRequired
}

