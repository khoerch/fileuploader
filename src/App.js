import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			filterOption: 'All'
		}
	}

	updateSearchTerm(term) {
		this.setState({
			searchTerm: term
		})
	}

	updateFilterOption(filter) {
		this.setState({
			filterOption: filter
		})
	}

	render() {
		return(
			<div className="App">
				<SearchBar 
					searchTerm={this.state.searchTerm}
					filterOption={this.state.filterOption}
					handleUpdate={term => this.updateSearchTerm(term)}
					handleFilter={filter => this.updateFilterOption(filter)}/>
				<FilterableList 
					files={this.props.files} 
					searchTerm={this.state.searchTerm} 
					filterOption={this.state.filterOption}/>
			</div>
		)
	}
}

export default App;