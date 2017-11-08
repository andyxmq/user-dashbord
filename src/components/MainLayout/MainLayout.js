import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
class MainLayout extends React.Component {
  render() {
      return (
        <Layout>
          <Header>aaaaaaaaa</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      );
  }
}
export default MainLayout;
