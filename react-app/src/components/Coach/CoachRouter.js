import React, { Component } from "react";
import CoachSecondPage from "./CoachSecondPage";
import CoachFirstPage from "./CoachFirstPage";

class Coach extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });

    // print the form values to the console

    console.log("submitting page 1 form");
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  componentWillMount() {}

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;

    return (
      <div style={{ paddingTop: "1rem" }}>
        {page === 1 && <CoachFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <CoachSecondPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

export default Coach;
