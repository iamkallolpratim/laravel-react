import React, {Component} from 'react';
import {Form, Icon, Input, Button} from 'antd';
import AuthService from '../../services/authService';

const FormItem = Form.Item;

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseError: {
                isError: false,
                code: '',
                text: ''
            },
            isLoading: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            this.props.dispatch(AuthService.login(values))
                .catch(({error, statusCode}) => {
                    const responseError = {
                        isError: true,
                        code: statusCode,
                        text: error
                    };
                    this.setState({responseError});
                    this.setState({
                        isLoading: false
                    });
                })
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form className="login-form">
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{required: true, message: 'Please input your email!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               placeholder="Email address"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                               placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="button" onClick={this.handleSubmit} className="login-form-button">
                        Log in
                    </Button>
                </FormItem>
            </Form>

        );
    }
}

export default LoginForm = Form.create()(LoginForm);