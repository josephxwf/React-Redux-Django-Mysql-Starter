import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProductDetail } from "../../actions";

import "../Forms/form.css";

class PriceFormForAllPolicies extends Component {
  constructor(props) {
    super(props);

    this.state = { policy: "General Liability" };
  }

  componentWillMount() {
    this.props.getProductDetail(this.props.params.code);
  }

  render() {
    const { productDetail } = this.props;
    return (
      <div>
        <h3>Product Name</h3>
        <h3>Product Description</h3>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProductDetail }, dispatch);
}

function mapStateToProps({ productDetail }) {
  return { productDetail };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceFormForAllPolicies);
