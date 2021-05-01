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
      attempts: 0,
      history: [],
      secretCode: [],
    };
  }

  async fetchData() {
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

  async componentDidMount() {
    this.fetchData();
  }

  handleClick = (num) => {
    const { guessInputs, secretCode } = this.state;
    let newGuessInputs = Object.assign({}, guessInputs);
    let newuserInputs = newGuessInputs.userInput;
    let copySecretCode = [...secretCode];

    if (guessInputs.userInput.length < 4) {
      newuserInputs.push(num);
      this.setState({ guessInputs: newGuessInputs });
    } else {
      return;
    }
    if (newuserInputs.length === 4) {
      newuserInputs.forEach((num, i) => {
        if (copySecretCode.includes(num)) {
          newGuessInputs.valueMatch++;
          copySecretCode[copySecretCode.indexOf(num)] = null;
        }
      });
      this.setState({ guessInputs: newGuessInputs });

      for (let i = 0; i < newuserInputs.length; i++) {
        if (newuserInputs[i] === this.state.secretCode[i]) {
          newGuessInputs.indexMatch++;
        }
        this.setState({ guessInputs: newGuessInputs });
      }
    }
  };

  handleCheckClick = () => {
    const { guessInputs, history } = this.state;
    let numberOfAttempts = this.state.attempts;
    numberOfAttempts++;

    if (numberOfAttempts === 10 && this.state.guessInputs.valueMatch !== 4) {
      return alert("You lost!");
    } else if (
      this.state.guessInputs.valueMatch === 4 &&
      this.state.guessInputs.indexMatch === 4
    ) {
      return alert("You won!");
    }

    let resetObj = {
      userInput: [],
      indexMatch: 0,
      valueMatch: 0,
    };

    let newHistory = [...history, guessInputs];

    if (guessInputs.userInput.length === 4) {
      this.setState({
        guessInputs: resetObj,
        history: newHistory,
        attempts: numberOfAttempts,
      });
    }
  };

  handleNewGameClick = () => {
    let newSecretCode = this.fetchData();

    let newGameState = {
      guessInputs: {
        userInput: [],
        indexMatch: 0,
        valueMatch: 0,
      },
      history: [],
      attempts: 0,
    };

    this.setState({
      guessInputs: newGameState.guessInputs,
      history: newGameState.history,
      secretCode: newSecretCode,
      attempts: newGameState.attempts,
    });
  };

  handleClearClick = () => {
    let resetObj = {
      userInput: [],
      indexMatch: 0,
      valueMatch: 0,
    };

    this.setState({
      guessInputs: resetObj,
    });
  };

  render() {
    console.log("secretCode", this.state.secretCode);
    console.log("guessInputs", this.state.guessInputs.userInput);
    console.log("ATTEMPTS:", this.state.attempts);
    console.log(`history`, this.state.history);
    return (
      <div className="App">
        <header>
          <h2>Mastermind Game</h2>
        </header>
        <div className="menu">
          <button
            className="new-game"
            onClick={() => this.handleNewGameClick()}
          >
            New Game
          </button>
          <button className="" onClick={() => this.handleClearClick()}>
            Clear
          </button>
          <button className="" onClick={() => this.handleCheckClick()}>
            Check
          </button>
        </div>
        <div className="hidden-circles">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="guessed-circles">
          {this.state.history.map((obj, i) => {
            return (
              <p key={i}>
                {obj.userInput.map((num, idx) => {
                  return <span key={idx}>{num}</span>;
                })}
                <span style={{ color: "red" }}>{obj.valueMatch}</span>
                <span style={{ color: "blue" }}>{obj.indexMatch}</span>
              </p>
            );
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
