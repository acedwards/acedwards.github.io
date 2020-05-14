import React from 'react';
import './App.css';
import {Navbar} from './Navbar';
import { Card, Col, Row, Layout } from 'antd';

const { Header, Content, Footer } = Layout;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 'home' };
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Navbar onClick={this.handleClick} current={this.state.current}/>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          {this.state.current === 'home' &&
            <h1>this is the home page</h1>
          }
          {this.state.current === 'projects' &&
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Card title">
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Card title">
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Card title">
                    Card content
                  </Card>
                </Col>
              </Row>
          }
          {this.state.current === 'about' &&
            <h1>this is the about page</h1>
          }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2020 Created by Andrea Edwards</Footer>
      </Layout>
    );
  }
  
}

export default App;
