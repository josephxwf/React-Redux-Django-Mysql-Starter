//Robin page
//SurveyForm shows a form for a user to add input
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import _ from "lodash";
import { bindActionCreators } from "redux";
import { setProductNameInReduxStore } from "../../actions/index";

import "./CoachFirstPage.css";

class CoachForm extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  componentDidUpdate(preProps, preState) {
    if (this.props.digits_2 !== preProps.digits_2) {
      this.props.getGLCode(this.props.digits_2);
      this.props.get_sub_industry(this.props.digits_2);
    }
  }

  change(e) {
    console.log("this.getCode(e.target.value)");
    console.log(this.getCode(e.target.value));
    this.props.setPolicyCode(this.getCode(e.target.value));
    this.props.getPolicyDesc(this.getCode(e.target.value));
    this.props.setPolicy(e.target.value); // set the policy name
  }

  getCode = title => {
    const policies = {
      "Business Owners Policy": "BOP",
      "Commercial Vehicle": "CV",
      "Cyber Liability": "CY",
      "Directors & Officers": "DO",
      "Errors & Omission": "EO",
      "General Liability": "GL",
      "Workers Compensation": "WC",
      "Key Man": "KY"
    };
    return policies[title];
  };

  render() {
    console.log("this.props.policy_code");
    console.log(this.props.policy_code);

    // REDUX store

    const {
      handleSubmit,
      industry2codes,
      industry4codes,
      sub_industry
    } = this.props;
    const { touched, pristine, reset, submitting, error } = this.props;
    // 2 digit codes
    console.log(this.props);
    const digits_2_options = industry2codes.map(selection => {
      return (
        <option key={selection.class_code} value={selection.class_code}>
          {selection.industry}
        </option>
      );
    });

    // selected industry title
    let digits_2_values = industry2codes.filter(code => {
      return code.class_code == this.props.digits_2;
    });

    let selected_industry_title = "";
    if (digits_2_values[0] != undefined) {
      selected_industry_title = digits_2_values[0].industry;
    }

    // 4 digit codes
    let digits_4_options = null;
    if (this.props.digits_2 != null) {
      let digits_4_values = industry4codes.filter(code => {
        return code.class_code == this.props.digits_2;
      });
      digits_4_options = digits_4_values.map(value => {
        return (
          <option key={value.class_sub_code} value={value.class_sub_code}>
            {value.industry}
          </option>
        );
      });
    }

    // REDUX call to get sub_industry list
    let naic_code_options = null;

    if (this.props.digits_4 != null) {
      //this.props.get_sub_industry(this.props.digits_2);
      // filter by digits_2
      const sub_industries_selected_list = this.props.sub_industry.filter(
        industry => {
          return industry.class_code == this.props.digits_2;
        }
      );

      let digits_4_str = this.props.digits_4.toString();
      if (sub_industries_selected_list != undefined) {
        // filter by digits_4
        naic_code_options = sub_industries_selected_list.map(sub_industry => {
          if (sub_industry.naic_code.toString().slice(0, 4) == digits_4_str) {
            return (
              <option
                key={sub_industry.naic_code}
                value={sub_industry.naic_code}
              >
                {sub_industry.industry}
              </option>
            );
          }
        });
      }
    }

    // selected sub_industry title
    let sub_industry_values = sub_industry.filter(code => {
      return code.naic_code == this.props.naic_code;
    });

    let selected_sub_industry_title = "";
    if (sub_industry_values[0] != undefined) {
      selected_sub_industry_title = sub_industry_values[0].industry;
    }

    let policies = [
      "Business Owners Policy",
      "Commercial Vehicle",
      "Cyber Liability",
      "Directors and Officer",
      "Errors and Omission",
      "General Liability",
      "Workers Compensation"
    ];

    const policy_options = policies.map(policy => {
      return (
        <option key={policy} value={policy}>
          {policy}
        </option>
      );
    });

    this.props.getPolicyDetails(this.props.policy_code, this.props.naic_code);

    return (
      <div class="container top">
        <form
          onSubmit={() => {
            console.log("submitting page 1");
            this.props.setIndustry(selected_sub_industry_title); // set the indystry name

            handleSubmit();
          }}
        >
          <div class="form-group row justify-content-md-center">
            <div class="col-sm-4 offset-sm-2">
              Fields with asterisk are required
            </div>
          </div>

          <div class="form-group row justify-content-md-center">
            <label class="col-sm-2 col-form-label " for="digits_2">
              Name*
            </label>
            <div class="col-sm-4">
              <Field
                class="form-control"
                name="digits_2"
                id="digits_2"
                component="select"
                validate={required}
              >
                {digits_2_options}
              </Field>
            </div>
          </div>

          <div class="form-group row justify-content-md-center">
            <label class="col-sm-2 col-form-label" for="email">
              Email*
            </label>
            <div class="col-sm-4">
              <Field
                class="form-control"
                id="email"
                name="email"
                component="input"
                type="email"
                placeholder="Email"
                validate={(email, required)}
              />
            </div>
          </div>

          <div class="form-group row justify-content-md-center">
            <div class="col-sm-4 offset-sm-2">
              <button
                type="submit"
                class="btn btn-primary"
                disabled={submitting}
              >
                Submit
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// Redux
// #To-Do why is this code called twice ?
const selector = formValueSelector("coachForm");
const mapStateToProps = state => {
  return {
    name: state.name
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setProductNameInReduxStore
    },
    dispatch
  );
}

// ReduxForm - validation
const required = value => (value ? undefined : "Required");

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

CoachForm = reduxForm({
  form: "coachForm", //Form name is same
  destroyOnUnmount: false
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CoachForm)
);

export default CoachForm;
