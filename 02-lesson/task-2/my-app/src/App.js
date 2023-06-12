import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Stepan",
      age: 25,
      showText: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      name: "Mykola",
      age: 30,
      showText: !prevState.showText
    }));
  };

  render() {
    return (
        <div>
          {this.state.showText && <p>Name: {this.state.name}, age: {this.state.age}</p>}
          <button onClick={this.handleClick}>Change</button>
        </div>
    );
  }
}

export default App