import React, { Component } from "react";
import { Row, Col, Input, Button } from "antd";
import CommentEntry from "./CommentEntry";
import { subscribeToComments, submitComment } from "../api/api";
import "./Comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      message: ""
    };
    subscribeToComments((err, newcomment) => {
      this.setState(prevState => ({
        comments: [...prevState.comments, newcomment]
      }));
    });
  }
  onMessageChange = event => {
    this.setState({ message: event.target.value });
  };
  onMessageSubmit = () => {
    if (!this.state.message) {
      return;
    }
    submitComment(this.state.message);
  };
  render() {
    return (
      <section className="comments">
        {
          //Could do with adding automatic scrolling to bottom here when a new comment is added//
        }
        <div className="comments-current">
          {this.state.comments.map((result, i) => {
            return (
              <CommentEntry
                key={`${result[0]} ${result[1]} ${result[4]}`}
                name={`${result[0]} ${result[1]}`}
                img={result[2]}
                comment={result[3]}
                time={result[4]}
              />
            );
          })}
        </div>
        <div className="comments-addbox">
          <Row>
            <Col xs={21} sm={21} md={21} lg={18} xl={18}>
              <Input
                className="comments-input"
                onChange={this.onMessageChange}
              />
            </Col>
            <Col xs={3} sm={3} md={3} lg={6} xl={6}>
              <Button
                type="primary"
                onClick={this.onMessageSubmit}
                className="comments-button"
              >
                Add
              </Button>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default Comments;
