import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class WhoAmI extends React.Component {
	state = {
		years: 26,
	};

	nextYear = () => {
		this.setState(state => ({
			years: ++state.years
		}));
	};


	render() {
		// eslint-disable-next-line react/prop-types
		const {name, surname, link} = this.props;
		const years = this.state.years;

		return <>
			<button onClick={this.nextYear}>++</button>
			<h1>My name is {name}, surname - {surname}, years = {years}</h1>
			<a href={link}>My profile</a>
		</>;
	}
}

const All = () =>
	<>
		<WhoAmI name={"Grigory"} surname={"Yakovlev"} link={"https://www.youtube.com/"}/>
		<WhoAmI name={"Artyom"} surname={"Okylsky"} link={"https://www.youtube.com/"}/>
		<WhoAmI name={"Ildar"} surname={"Kazihanov"} link={"https://www.youtube.com/"}/>
	</>;

ReactDOM.render(
	<React.StrictMode>
		<All/>
	</React.StrictMode>,
	document.getElementById("root")
);
