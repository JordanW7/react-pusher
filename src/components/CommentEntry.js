import React from "react";
import { Row, Col, Avatar } from "antd";
import moment from "moment";
import "./CommentEntry.css";

const CommentEntry = ({ name, comment, img, time }) => {
  const avatarimg = (
    <img src={img} className="commententry-avatar" alt={name} />
  );
  const avatar =
    name === "You " ? (
      <Avatar
        style={{ color: "#ffffff", backgroundColor: "#fb3f6c" }}
        className="commententry-avatar"
      >
        {name}
      </Avatar>
    ) : (
      <Avatar
        style={{ color: "#ffffff", backgroundColor: "#00bfff" }}
        className="commententry-avatar"
      >
        {name}
      </Avatar>
    );
  return (
    <Row className="commententry">
      <div className="commententry-user">
        <Col span={18}>
          {img ? avatarimg : avatar}
          {name}:
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
