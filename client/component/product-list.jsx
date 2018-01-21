import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAllProducts } from "../actions/product.action";

export class ProductsList extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render(props) {
    return (
      <div>
        {this.props.products.map(product => (
          <div key={product._id}>{product.name}</div>
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.array,
  getAllProducts: PropTypes.func
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: getAllProducts(dispatch)
  };
};

export const ConnectedProductsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
