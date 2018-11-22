import React, { Component } from 'react';
import './App.css';
import { Row, Col } from "antd";
import Header from './components/Header.js';
import Video from './components/Video.js';
import Comments from './components/Comments.js';

class App extends Component {
  render() {
    return (
      <div className="app">
      <Header />
      <main className="app-main">
      <div className="app-container">
      <Row>
          <Col
              xs={24}
              sm={24}
              md={24}
              lg={16}
              xl={16}
            >
              <Video />
          </Col>
          <Col
              xs={24}
              sm={24}
              md={24}
              lg={8}
              xl={8}
            >
              <Comments />
          </Col>
        </Row>
      </div>
      </main>
      </div>
    );
  }
}

export default App;