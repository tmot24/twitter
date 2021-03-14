import React from "react";
import "./search-panel.css";

export default class SearchPanel extends React.Component {
	state = {
		term: "",
	};
	
	onUpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({term});
		// eslint-disable-next-line react/prop-types
		this.props.onUpdateSearch(term);
	};
	
	render() {
		return (
			<input
				className={"form-control search-input"}
				type={"text"}
				placeholder={"Поиск по записям"}
				onChange={this.onUpdateSearch}
			/>
		);
	}
}