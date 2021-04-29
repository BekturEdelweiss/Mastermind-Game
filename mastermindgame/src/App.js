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
    // const updatedInput = this.state.guessInputs.userInput;

    // console.log("here:", updatedInput, this.state.secretCode);

    // for (let i = 0; i < updatedInput.length; i++) {
    //   let newValueMatch = this.state.guessInputs.valueMatch;
    //   if (updatedInput[i] === this.state.secretCode[i]) {
    //     newValueMatch += 1;
    //   }
    //   this.setState({ valueMatch: newValueMatch });
    // }
    // console.log("look here:", this.state.guessInputs.valueMatch);

    const { guessInputs } = this.state;

    const newGuessInputs = Object.assign({}, guessInputs);

    for (let i = 0; i < newGuessInputs.userInput.length; i++) {
      // let newValueMatch = this.state.guessInputs.valueMatch;
      if (newGuessInputs.userInput[i] === this.state.secretCode[i]) {
        newGuessInputs.indexMatch++;
      }
      this.setState({ guessInputs: newGuessInputs });
    }
  };

  render() {
    console.log("secretCode", this.state.secretCode);
    console.log("guessInputs", this.state.guessInputs.userInput);
    console.log("look here:", this.state.guessInputs.indexMatch);
    console.log("state", this.state);

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
        <div className="guessed-circles">
          {/* {this.state.guessInputs.userInput.map(num) => {
            return (
              <span className="dot"></span>
            )
          }} */}
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
