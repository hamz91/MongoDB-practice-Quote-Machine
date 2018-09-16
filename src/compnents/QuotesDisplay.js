import React from "react";
import QuoteDetails from "./QuoteDetails";

class QuotesDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: {}
    };
  }
  componentDidMount() {
    fetch("/api/quotes").then(response => {
      response.json().then(data => {
        this.setState({
          quotes: data
        });
      });
    });
  }
  render() {
    return (
      <div>
        {Object.keys(this.state.quotes).map(quote => {
          console.log("movie", this.state.quotes[quote].inputs.movie);
          console.log("character", this.state.quotes[quote].inputs.character);
          console.log("quote", this.state.quotes[quote].inputs.quote);
          <div>
            <h3>{this.state.quotes[quote].inputs.movie}</h3>
            <h3>{this.state.quotes[quote].inputs.character}</h3>
            <h3>{this.state.quotes[quote].inputs.quote}</h3>
          </div>;
        })}
      </div>
    );
  }
}

export default QuotesDisplay;
