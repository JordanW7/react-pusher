import React from 'react';
import { Row, Col, Avatar } from "antd";
import './CommentEntry.css';

const CommentEntry = () => {
	return (
		<Row className="commententry">
		<div className="commententry-user">
			<Col span={18}>
				{//<Avatar className="commententry-avatar">A</Avatar>
				}
				<img src="http://placeimg.com/40/40/people" className="commententry-avatar" alt="Anthony Smith" />
				Anthony Smith says:
			</Col>
			<Col span={6} className="commententry-user">
			(10sec ago)
			</Col>
			</div>
			<Col span={24}>
				<p>This is my Comment!</p>
			</Col>
		</Row>
		);
}

export default CommentEntry;
