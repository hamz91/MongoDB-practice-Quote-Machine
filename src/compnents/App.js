import React from "react";
import Header from "./Header";
import QuotesForm from "./QuotesForm";
import QuotesDisplay from "./QuotesDisplay";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <QuotesForm />
      </div>
    );
  }
}

export default App;
