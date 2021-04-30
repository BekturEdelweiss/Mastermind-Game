import "./App.css";
import React from "react";
import axios from "axios";
// import { connect } from "react-redux";
// import { fetchNumbersfromApi } from "./redux/numbers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      guessInputs: {
        userInput: [],
        indexMatch: 0,
        valueMatch: 0,
      },
      // sideScores: [],
      secretCode: [],
    };
  }
  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"
      );

      const result = res.data.split("").filter((el) => el !== "\n");

      this.setState({
        secretCode: result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleClick = (num) => {
    const { guessInputs } = this.state;
    let newGuessInputs = Object.assign({}, guessInputs);
    let newuserInputs = newGuessInputs.userInput;

    if (guessInputs.userInput.length < 4) {
      newuserInputs.push(num);
      this.setState({ guessInputs: newGuessInputs });
    }
  };

  handleGuessClick = () => {
    const { guessInputs } = this.state;
    const newGuessInputs = Object.assign({}, guessInputs);

    if (newGuessInputs.userInput.length === 4)
      for (let i = 0; i < newGuessInputs.userInput.length; i++) {
        if (newGuessInputs.userInput[i] === this.state.secretCode[i]) {
          newGuessInputs.indexMatch++;
        }
        this.setState({ guessInputs: newGuessInputs });
      }

    this.state.secretCode.forEach((num, i) => {
      if (newGuessInputs.userInput.includes(num)) {
        newGuessInputs.valueMatch++;
        newGuessInputs.userInput[newGuessInputs.userInput.indexOf(num)] = null;
      }
    });
  };

  render() {
    console.log("secretCode", this.state.secretCode);
    console.log("guessInputs", this.state.guessInputs.userInput);
    console.log("LOOK INDEX:", this.state.guessInputs.indexMatch);
    console.log("LOOK VALUE:", this.state.guessInputs.valueMatch);

    return (
      <div className="App">
        <header>
          <h2>Mastermind Game</h2>
        </header>
        <div className="menu">
          <button className="new-game">New Game</button>
          <button className="reset">Reset</button>
          <button className="" onClick={() => this.handleGuessClick()}>
            Guess
          </button>
        </div>
        <div className="hidden-circles">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="sideScore">
          {this.state.guessInputs.indexMatch} <br />
          {this.state.guessInputs.valueMatch}
        </div>
        <div className="guessed-circles">
          {this.state.guessInputs.userInput.map((num, i) => {
            return <span key={i}>{num}</span>;
          })}
        </div>
        <div className="coloredButton">
          <button className="" onClick={() => this.handleClick("0")}>
            zero
          </button>
          <button className="" onClick={() => this.handleClick("1")}>
            one
          </button>
          <button className="" onClick={() => this.handleClick("2")}>
            two
          </button>
          <button className="" onClick={() => this.handleClick("3")}>
            three
          </button>
          <button className="" onClick={() => this.handleClick("4")}>
            four
          </button>
          <button className="" onClick={() => this.handleClick("5")}>
            five
          </button>
          <button className="" onClick={() => this.handleClick("6")}>
            six
          </button>
          <button className="" onClick={() => this.handleClick("7")}>
            seven
          </button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     secretCode: state.secretCode,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatching plain actions
//     fetchNumbersfromApi: () => dispatch(fetchNumbersfromApi()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
