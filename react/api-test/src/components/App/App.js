/*
 * @Author: Lix 
 * @Date: 2018-04-03 06:58:25 
 * @Last Modified by: Lix
 * @Last Modified time: 2018-04-03 16:19:13
 */

import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import  HeaderView from '../Layout/Header';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.uploadImgTest = this.uploadImgTest.bind(this);
  }
  
  uploadImgTest() {
    fetch('http://192.168.2.103/code-repo/PHP/wxdev/web/image/upload')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <Layout>
        <HeaderView/>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Button type="primary" onClick={this.uploadImgTest}>上传图片api测试</Button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;