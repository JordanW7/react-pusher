import React from "react";
import { Row, Col, Avatar } from "antd";
import moment from "moment";
import "./CommentEntry.css";

const CommentEntry = ({ name, comment, img, time }) => {
  return (
    <Row className="commententry">
      <div className="commententry-user">
        <Col span={18}>
          {
            //<Avatar className="commententry-avatar">A</Avatar>
          }
          <img src={img} className="commententry-avatar" alt={name} />
          {name} says:
        </Col>
        <Col span={6} className="commententry-user">
          {`(${moment(time).fromNow()})`}
        </Col>
      </div>
      <Col span={24}>
        <p>{comment}</p>
      </Col>
    </Row>
  );
};

export default CommentEntry;
