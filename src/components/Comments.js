import React, { Component } from 'react';
import { Row, Col, Input, Button } from "antd";
import CommentEntry from './CommentEntry';
import './Comments.css';

const FormItem = Form.Item;

class Comments extends Component {
  render() {
    return (
      <section className="comments">
	      <div className="comments-current">
		      <CommentEntry />
		      <CommentEntry />
		      <CommentEntry />
		      <CommentEntry />
		      <CommentEntry />
		  </div>
		  <Row>
		  <Col
              xs={21}
              sm={21}
              md={21}
              lg={18}
              xl={18}
            >
		  <Input className="comments-input"/>
		 </Col>
		 <Col
              xs={3}
              sm={3}
              md={3}
              lg={6}
              xl={6}
            >
		  	<Button type="primary" onClick={this.handleSubmit} className="comments-button">Add</Button>
		  	</Col>
		  	</Row>
      </section>
    );
  }
}

export default Comments;

