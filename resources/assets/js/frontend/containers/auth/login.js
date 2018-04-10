import React, {Component} from 'react';
import {Row,Col} from 'antd';
import LoginForm from '../../component/auth/loginForm';

class LoginContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={8} offset={8}>
                        <LoginForm/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default LoginContainer;