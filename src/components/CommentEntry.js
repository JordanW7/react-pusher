import React from 'react';
import { Row, Col, Avatar } from "antd";
import './CommentEntry.css';

const CommentEntry = () => {
	return (
		<Row>
			<div>
			<Col span={24} className="commententry-user">
				<Avatar className="commententry-avatar">A</Avatar>
				Anthony Smith says:
			</Col>
			</div>
			<Col span={24}>
				<p>This is my Comment!</p>
			</Col>
		</Row>
		);
}

export default CommentEntry;
