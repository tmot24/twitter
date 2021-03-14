import React from "react";
import "./post-list-item.css";

export default class PostListItem extends React.Component {
	
	render() {
		// eslint-disable-next-line react/prop-types
		const {label, important, like, onDelete, onToggleImportant, onToggleLiked} = this.props;
		let classNames = "app-list-item d-flex justify-content-between";
		
		if (important) {
			classNames += " important";
		}
		if (like) {
			classNames += " like";
		}
		
		return (
			<div className={classNames}>
				<span
					className={"app-list-item-label"}
					onClick={onToggleLiked}
				>
					{label}
				</span>
				<div className={"d-fex justify-content-center align-items-center"}>
					<button
						type={"button"}
						className={"btn-star btn-sm"}
						onClick={onToggleImportant}
					>
						<i className={"fa fa-star"}/>
					</button>
					<button
						type={"button"}
						className={"btn-trash btn-sm"}
						onClick={onDelete}
					>
						<i className={"fa fa-trash-o"}/>
					</button>
					<i className={"fa fa-heart"}/>
				</div>
			</div>
		);
	}
	
}