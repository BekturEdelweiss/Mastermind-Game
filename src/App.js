import "./App.css";
import React from "react";
import axios from "axios";
import Buttons from "./Buttons";
import ColorsMap from "./ColorsMap";
import { callSwal } from "./helper";

const newGameText =
  "Our enemies have mined our bridge. As a military engineer, you have to de-mine the bridge. Try to guess the correct color and the correct order of the bombs. You have a total of 10 attemps. FEEDBACK: The RED number shows how many correct colors you have guessed and the BLUE number will show how many correct colors and their correct locations you have guessed. Are you ready?";

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
      colorMap: ColorsMap,
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

  handleColorClick = (num) => {
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

  handleDemineClick = () => {
    const { guessInputs, history } = this.state;
    let numberOfAttempts = this.state.attempts;
    numberOfAttempts++;

    if (numberOfAttempts === 10 && this.state.guessInputs.valueMatch !== 4) {
      callSwal(
        "The bridge has exploded!",
        "You let us down, Sapper...",
        "error",
        "I'm sorry, sir"
      );
    } else if (
      this.state.guessInputs.valueMatch === 4 &&
      this.state.guessInputs.indexMatch === 4
    ) {
      callSwal(
        "The bridge is de-mined.",
        "Congratulations, Sapper!",
        "success",
        "Glad to serve!"
      );
    }

    let newHistory = [...history, guessInputs];

    if (guessInputs.userInput.length === 4) {
      this.setState({
        history: newHistory,
        attempts: numberOfAttempts,
      });
      this.handleClearClick();
    }
  };

  handleNewGameClick = () => {
    callSwal(
      "Salute, Sapper! Here is the deal:",
      newGameText,
      null,
      "Yes, sir!",
      true
    );

    this.fetchData();

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
    return (
      <div className="App">
        <header className="menu">
          <h2>DE-MINE A BRIDGE</h2>
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
          <button className="" onClick={() => this.handleDemineClick()}>
            De-mine
          </button>
        </div>
        <div className="menu">
          <p style={{ color: "DarkGreen" }}>
            {" "}
            SAPPER, YOU HAVE {10 - this.state.attempts} ATTEMPTS LEFT
          </p>
        </div>

        <div className="guessed-circles">
          {this.state.history.map((obj, i) => {
            return (
              <p key={i}>
                {obj.userInput.map((num, idx) => {
                  return <span key={idx}>{this.state.colorMap[num]}</span>;
                })}
                <span className="scores" style={{ color: "red" }}>
                  {obj.valueMatch}
                </span>
                <span className="scores" style={{ color: "blue" }}>
                  {obj.indexMatch}
                </span>
              </p>
            );
          })}
        </div>

        <div className="guessed-circles">
          {this.state.guessInputs.userInput.map((num, i) => {
            return <span key={i}>{this.state.colorMap[num]}</span>;
          })}
        </div>

        <Buttons handleColorClick={this.handleColorClick} />
      </div>
    );
  }
}

export default App;
