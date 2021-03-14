import React from "react";
import AppHeader from "../appHeader/appHeader";
import SearchPanel from "../searchPanel/searchPanel";
import PostStatusFilter from "../postStatusFilter/postStatusFilter";
import PostList from "../postList/postList";
import PostAddForm from "../postAddForm/postAddForm";
import "./app.css";

export default class App extends React.Component {
	state = {
		data: [
			{label: "Going to learn React", important: true, like: false, id: 1},
			{label: "That is so good?", important: false, like: true, id: 2},
			{label: "I need a break...", important: false, like: false, id: 3},
		],
		term: "",
		filter: "all",
	};
	maxId = 4;
	
	deleteItem = (id) => {
		this.setState(state => {
			const index = state.data.findIndex(elem => elem.id === id);
			const before = state.data.slice(0, index);
			const after = state.data.slice(index + 1);
			const newArr = [...before, ...after];
			return {
				data: newArr
			};
		});
	};
	
	addItem = (body) => {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++,
		};
		this.setState(state => {
			const newArr = [...state.data, newItem];
			return {
				data: newArr
			};
		});
	};
	
	handleToggle = (id, propToggle) => {
		this.setState(state => {
			const index = state.data.findIndex(elem => elem.id === id);
			const old = state.data[index];
			const newItem = {...old, [propToggle]: !old[propToggle]};
			const before = state.data.slice(0, index);
			const after = state.data.slice(index + 1);
			const newArr = [...before, newItem, ...after];
			return {
				data: newArr
			};
		});
	};
	
	onToggleImportant = (id) => {
		return this.handleToggle(id, "important");
	};
	
	onToggleLiked = (id) => {
		return this.handleToggle(id, "like");
	};
	
	searchPost = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.label.indexOf(term) > -1;
		});
	};
	
	filterPost = (items, filter) => {
		if (filter === "like") {
			return items.filter(item => item.like);
		} else {
			return items;
		}
	};
	
	onUpdateSearch = (term) => {
		this.setState({term});
	};
	
	onFilterSelect = (filter) => {
		this.setState({filter});
	};
	
	render() {
		const liked = this.state.data.filter(elem => elem.like).length;
		const allPosts = this.state.data.length;
		const visiblePosts = this.filterPost(this.searchPost(this.state.data, this.state.term),
			this.state.filter);
		
		return (
			<>
				<div className={"app"}>
					<AppHeader
						liked={liked}
						allPosts={allPosts}
					/>
					<div className={"search-panel d-flex"}>
						<SearchPanel
							onUpdateSearch={this.onUpdateSearch}
						/>
						<PostStatusFilter
							filter={this.state.filter}
							onFilterSelect={this.onFilterSelect}
						/>
					</div>
					<PostList
						posts={visiblePosts}
						onDelete={this.deleteItem}
						onToggleImportant={this.onToggleImportant}
						onToggleLiked={this.onToggleLiked}
					/>
					<PostAddForm
						onAdd={this.addItem}
					/>
				</div>
			</>
		);
	}
}