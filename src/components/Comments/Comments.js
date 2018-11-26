import React, { Component } from "react";
import { Row, Col, Input, Button, message } from "antd";
import CommentEntry from "./CommentEntry/CommentEntry";
import { subscribeToComments, submitComment } from "../../api/api";
import "./Comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      usercomment: ""
    };
    try {
      subscribeToComments((err, newcomment) => {
        this.setState(prevState => ({
          comments: [newcomment, ...prevState.comments]
        }));
      });
    } catch (err) {
      message.error("Error subscribing to comments");
    }
  }
  onMessageChange = event => {
    this.setState({ usercomment: event.target.value });
  };
  onKeyPress = e => {
    if (e.which === 13) {
      this.onMessageSubmit();
    }
  };
  onMessageSubmit = () => {
    const { usercomment } = this.state;
    if (!usercomment) {
      return message.error("Please provide a message to submit");
    }
    try {
      submitComment(usercomment);
      const newcomment = ["You", "", "", usercomment, new Date()];
      this.setState(prevState => ({
        comments: [newcomment, ...prevState.comments]
      }));
    } catch (err) {
      message.error("Error submitting comment");
    }
  };
  render() {
    return (
      <section className="comments">
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
              <label htmlFor="addcommentfield" style={{ display: "none" }}>
                Add a comment
              </label>
              <Input
                className="comments-input"
                onChange={this.onMessageChange}
                onKeyPress={this.onKeyPress}
                placeholder="Add a comment"
                id="addcommentfield"
              />
            </Col>
            <Col xs={3} sm={3} md={3} lg={6} xl={6}>
              <Button
                id="addcommentsubmit"
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
