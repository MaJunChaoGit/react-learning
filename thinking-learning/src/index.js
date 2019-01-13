import React from 'react';
import ReactDOM from 'react-dom';

class ProductRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <thead>
        <tr><th>{this.props.title}</th></tr>
        {this.props.children}
      </thead>

    );
  }
}

class ProductTable extends React.Component {
  renderRow(val) {
    return <ProductRow key={val.name} name={val.name} price={val.price}></ProductRow>;
  }

  initTable(map) {
    let rows = [];
    for (let entries of map) {
      const [key, value] = entries;
      let row = [];
      value.forEach(val => {
        if (!this.props.isStockOnly && val.name.includes(this.props.filterText)) {
          row.push(this.renderRow(val));
        } else {
          if (val.stocked && val.name.includes(this.props.filterText)) {
            row.push(this.renderRow(val));
          }
        }
      });
      if (row.length > 0) {
        rows.push( <ProductCategoryRow key={key} title={key}>{row}</ProductCategoryRow>)
      }
    }
    return rows;
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{this.initTable(this.props.value)}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {

  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.props.handleFilterChange}/>
        <span><input type="checkbox" onChange={this.props.handleStockChange}/> Only show products in stock</span>
      </div>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isStockOnly: false
    };
  }

  handleStockChange = (event) => {
    this.setState({
      isStockOnly: event.target.checked
    })
  }
  handleFilterChange = (event) => {
    this.setState({
      filterText: event.target.value
    })
  }
  render() {
    const data = this.props.value.slice();
    const map = new Map();
    for (var i = 0; i < data.length; i++) {
      let key = data[i].category;
      if (map.has(key)) {
        map.get(key).push(data[i]);
      } else {
        map.set(key, [data[i]]);
      }
    }

    return (
      <div>
        <SearchBar filterText={this.state.filterText} handleStockChange={this.handleStockChange} handleFilterChange={this.handleFilterChange}></SearchBar>
        <ProductTable value={map} isStockOnly={this.state.isStockOnly} filterText={this.state.filterText}></ProductTable>
      </div>
    );
  }
}

const json = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

ReactDOM.render(
  <FilterableProductTable value={json}></FilterableProductTable>,
  document.getElementById('root')
);