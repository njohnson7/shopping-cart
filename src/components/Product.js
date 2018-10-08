import React, { Component } from 'react';

class Product extends Component {
  addToCart = () => (
    this.props.handleAddToCart(this.props.id)
  )

  render() {
    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">{this.props.price}</p>
          <p className="quantity">{this.props.quantity} left in stock</p>
          <div className="actions product-actions">
            <a className="button add-to-cart" onClick={this.addToCart}>Add to Cart</a>
            <a className="button edit">Edit</a>
          </div>
          <a className="delete-button"><span>X</span></a>
        </div>
      </div>
    );
  }
}

export default Product;
