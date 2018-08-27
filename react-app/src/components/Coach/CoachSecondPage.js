import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getProductDetail } from "../../actions/index";

class CoachFormSecondPage extends Component {
  constructor(props) {
    super(props);
    this.selectPolicy = this.selectPolicy.bind(this);
    this.state = { policyCode: this.props.policy_code };
  }

  componentDidMount() {
    this.props.getPolicyDetails(this.state.policyCode, this.props.naic_code);
  }

  componentDidUpdate(preProps, preState) {
    if (this.state.policyCode !== preState.policyCode) {
      this.props.getPolicyDetails(this.state.policyCode, this.props.naic_code);
    }
  }

  selectPolicy(policy_code) {
    this.props.getPolicyDetails(policy_code, this.props.naic_code);
    // const selected_policy = policy_descriptions.filter(policy => {
    //   return policy.title === policy_title;
    // });
    // if (selected_policy != undefined) {
    //   this.props.getPolicy(selected_policy[0].code);
    // }
    this.setState({ policyCode: policy_code });
  }

  render() {
    console.log("testing:" + this.props.selected_industry);
    const { handleSubmit, previousPage } = this.props;

    const { userInfo } = this.props.userDetail;
    if (this.props.userDetail == undefined) {
      return (
        <div class="progress">
          <div
            class="progress-bar w-75"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      );
    }

    return (
      <div
        class="nojs"
        style={{ display: "flex", flexDirection: "row", fexWrap: "wrap" }}
      >
        <div
          style={{
            flex: 1.25,
            position: "sticky",
            alignSelf: "flex-start",
            marginTop: "0em"
          }}
        />
        <div
          style={{
            flex: 6,
            marginLeft: "0em",
            borderLeft: "1px solid grey",
            borderRight: "1px solid grey",
            padding: "1rem"
          }}
        >
          <div style={{ maxWidth: "100%" }}>
            <div variant="headline" component="h2" gutterBottom>
              <h3>{userInfo.description}</h3> for
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            position: "sticky",
            alignSelf: "flex-start",
            padding: "1em"
          }}
        >
          <form
            onSubmit={() => {
              console.log("submitting page 2");
              handleSubmit();
            }}
          >
            <br />
            <div class="text-center">
              <div>
                <button
                  class="btn btn-secondary text-center"
                  onClick={previousPage}
                >
                  Back
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProductDetail }, dispatch);
}

const selector = formValueSelector("coachForm");
const mapStateToProps = state => {
  return {
    productName: state.productName,
    productDetail: state.productDetail
  };
};

export default reduxForm({
  form: "coachForm", //Form name is same
  destroyOnUnmount: false
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CoachFormSecondPage)
);
// export default connect(mapStateToProps, null)(withStyles(styles)(Schedule));

// export default CoachFormSecondPage;
