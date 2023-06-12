import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Stepan",
      age: 25,
      showText: false,
      showButton: true
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      showText: !prevState.showText,
      showButton: !prevState.showButton
    }));
  };

  render() {
    const buttonText = this.state.showButton ? "Show" : "Hide";


    return (
        <div>
          {this.state.showText && <p>Name: {this.state.name}, age: {this.state.age}</p>}
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
    );
  }
}

export default App