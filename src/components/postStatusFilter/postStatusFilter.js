import React from "react";
import "./post-status-filter.css";

export default class PostStatusFilter extends React.Component {
	buttons = [
		{name: "all", label: "Все"},
		{name: "like", label: "Понравилось"},
	];
	
	render() {
		const buttons = this.buttons.map(({name, label}) => {
			// eslint-disable-next-line react/prop-types
			const {filter, onFilterSelect} = this.props;
			// eslint-disable-next-line react/prop-types
			const active = filter === name;
			const clazz = active ? "btn-info" : "btn-outline-secondary";
			return (
				<button
					key={name}
					type={"button"}
					className={`btn ${clazz}`}
					onClick={() => onFilterSelect(name)}
				>
					{label}
				</button>
			);
		});
		
		return (
			<div className={"btn-group"}>
				{buttons}
			</div>
		);
	}
	
}