import React from "react";

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
          return (
            <div key={this.state.quotes[quote]}>
              <ul>
                <li>Movie : {this.state.quotes[quote].inputs.movie}</li>
                <li>Character : {this.state.quotes[quote].inputs.character}</li>
                <li>Quote : "{this.state.quotes[quote].inputs.quote}"</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default QuotesDisplay;
