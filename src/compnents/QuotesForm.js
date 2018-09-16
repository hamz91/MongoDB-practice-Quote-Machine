import React from "react";

class QuotesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      movie: "",
      character: "",
      quote: ""
    };

    this.movieChange = this.movieChange.bind(this);
    this.characterChange = this.characterChange.bind(this);
    this.quoteChange = this.quoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  movieChange(event) {
    this.setState({
      movie: event.target.value
    });
  }
  characterChange(event) {
    this.setState({
      character: event.target.value
    });
  }
  quoteChange(event) {
    this.setState({
      quote: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const inputs = {
      movie: this.state.movie,
      character: this.state.character,
      quote: this.state.quote
    };
    console.log(inputs);

    fetch(`/api/quotes`, {
      method: "post",
      body: JSON.stringify({ inputs }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
  }

  render() {
    console.log(this.state.movie);
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <input placeholder="Enter Movie Name" onChange={this.movieChange} />
          <input
            placeholder="Enter Character's Name"
            onChange={this.characterChange}
          />
          <input placeholder="Enter Quote" onChange={this.quoteChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default QuotesForm;
