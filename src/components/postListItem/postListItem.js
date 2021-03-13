import React from "react";
import "./post-list-item.css";

const PostListItem = () =>
	<li className={"app-list-item d-flex justify-content-between"}>
		<span className={"app-list-item-label"}>
            Hello world!
		</span>
		<div className={"d-fex justify-content-center align-items-center"}>

			<button
				type={"button"}
				className={"btn-star btn-sm"}
			>
				<i className={"fa fa-star"}/>
			</button>

			<button
				type={"button"}
				className={"btn-trash btn-sm"}
			>
				<i className={"fa fa-trash-o"}/>
			</button>

			<i className={"fa fa-heart"}/>

		</div>
	</li>;

export default PostListItem;