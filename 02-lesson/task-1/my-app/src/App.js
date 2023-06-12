import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Stepan",
      age: 25
    };
  }

  handleClick = () => {
    this.setState({
      name: "Mykola",
      age: 30
    });
  };

  render() {
    return (
        <div>
          <p>Name: {this.state.name}, age: {this.state.age}</p>
          <button onClick={this.handleClick}>Change</button>
        </div>
    );
  }
}

export default App