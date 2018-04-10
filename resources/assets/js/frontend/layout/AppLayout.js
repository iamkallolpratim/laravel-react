import React, {Component} from 'react';
import AppRouter from '../routes/AppRouter';
import {NavLink} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';

const {Header, Content, Footer} = Layout;


class AppLayout extends Component {
    render() {
        const {match} = this.props;
        const {location} = this.props;
        return (
            <React.Fragment>
                <Layout className="layout"
                        style={{
                            height: '100vh',
                        }}>
                    <Header>
                        <div className="logo"/>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${match.path}`]}
                              selectedKeys={[location.pathname]} style={{
                            lineHeight: '64px'
                        }}>
                            <Menu.Item key={`${match.path}news`}>
                                <NavLink exact to={`${match.path}news`}><Icon type="info"/>
                                <span>News</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key={`${match.path}contact-us`}>
                                <NavLink exact to={`${match.path}contact-us`}><Icon type="mail"/>
                                    <span>Contact Us</span>
                                </NavLink>
                            </Menu.Item>
                            {/* <Menu.Item key={`${match.path}/login`}>
                                <NavLink exact to={`${match.path}/login`}><Icon type="lock"/>
                                    <span>Login</span>
                                </NavLink>
                            </Menu.Item> */}
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 20 }}>
                        <div style={{
                            padding: 24,
                            background:"#fff"
                        }}><AppRouter {...this.props}/></div>
                    </Content>
                    <Footer style={{
                        textAlign: 'center'
                    }}>
                        Laravel React ©2018 Created by Kallol Pratim
                    </Footer>
                </Layout>
            </React.Fragment>);
    }
}

export default AppLayout;
