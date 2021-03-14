import React from "react";
import PostListItem from "../postListItem/postListItem";
import "./post-list.css";

import {ListGroup} from "reactstrap";

// eslint-disable-next-line react/prop-types
const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
	// eslint-disable-next-line react/prop-types
	const elements = posts.map(item => {
		const {id, ...itemProps} = item;
		return (
			<li key={id} className={"list-group-item"}>
				<PostListItem
					{...itemProps}
					onDelete={() => onDelete(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleLiked={() => onToggleLiked(id)}
				/>
			</li>
		);
	});
	
	return (
		<ListGroup className={"app-list"}>
			{elements}
		</ListGroup>
	);
};


export default PostList;