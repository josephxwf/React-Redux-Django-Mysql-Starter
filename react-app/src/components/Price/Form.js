//SurveyForm shows a form for a user to add input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class Form extends Component {
  render(props) {
    // const { handleSubmit, pristine, reset, submitting } = props;

    const questions = this.props.questions.map((question, index) => {
      console.log(question);
      if (question !== "") {
        return (
          <div key={index} style={{ display: "block" }}>
            <label>{question}</label>
            <div>
              <Field name={`Question${index}`} component="input" type="text" />
            </div>
          </div>
        );
      }
    });

    return (
      <div>
        <form action="">
          {questions}
          <div>
            <button type="submit">Submit</button>
            <button type="button">Clear Values</button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "priceForm" // a unique identifier for this form
})(Form);
