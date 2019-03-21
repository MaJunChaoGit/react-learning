import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FilterableProductTable extends Component {
	constructor() {
		super();
		this.state = {
			list: [],
			filterValue: "",
			isStock: false
		}
	}
	filterHandler(e) {
		this.setState({
			filterValue: e.target.value
		});
	}
  stockHandler(e) {
		this.setState({
			isStock: e.target.checked
		})
  }
	render() {
		let newList = this.state.list.slice();
		if (this.state.filterValue !== "") {
			newList = newList.filter((item) => {
				return item.name.includes(this.state.filterValue);
			});
		}
		if (this.state.isStock) {
			newList = newList.filter((item) => {
				return item.stocked
			});
		}
		return (
			<div>
				<SearchBar value={this.state.filterValue} checked={this.state.checked} changeHandler={(e) => this.filterHandler(e)} stockHandler={(e) => this.stockHandler(e)}></SearchBar>
				<ProductTable list={newList}></ProductTable>
			</div>
		);
	}
	componentDidMount() {
		this.setState({
			list:[
			  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
			  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
			  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
			  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
			  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
			  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
			]
		});
	}
}
class SearchBar extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<div>
					<input type="text" onChange={this.props.changeHandler} value={this.props.value} placeholder="Search..."/>
				</div>
				<div>
					<input type="checkbox" onChange={this.props.stockHandler} value={this.props.checked}/><label>Only show products in stock</label>
				</div>
			</div>
		);
	}
}
class ProductTable extends Component {
	constructor() {
		super();
	}
	render() {
		let temp = {};
		let table = [];
		this.props.list.forEach((item) => {
			if (!temp[item.category]) {
				temp[item.category] = [];
			}
			temp[item.category].push(item);
		});
		Object.keys(temp).forEach((key) => {
			table.push(<ProductCategoryRow category={key} key={key}></ProductCategoryRow>);
			temp[key].forEach((item) => {
				table.push(<ProductRow name={item.name} price={item.price} key={item.name}></ProductRow>)
			});
		});
		return (
			<div>
				<ul>
					<li><span>name</span><span>price</span></li>
					{table}
				</ul>
			</div>
		);
	}
}
class ProductCategoryRow extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<li>{this.props.category}</li>
		);
	}
}
class ProductRow extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<li>
				<span>{this.props.name}</span>
				<span>{this.props.price}</span>
			</li>
		);
	}
}
ReactDOM.render(<FilterableProductTable />, document.getElementById('root'));