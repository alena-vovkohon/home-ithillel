import React from "react";
import { Component } from "react";
import "./App.css";
import Emoji from "./Emoji/Emoji";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      resaltShow: false,
      emojiWon: "",
      emojis: [
        { unicode: "128512", like: 0 },
        { unicode: "128105", like: 0 },
        { unicode: "128514", like: 0 },
        { unicode: "127877", like: 0 },
        { unicode: "128692", like: 0 },
      ],
    };
  }

  handleClick(index) {
    let emoji = this.state.emojis[index];
    emoji.like = emoji.like + 1;
    let emojis = [...this.state.emojis];
    emojis[index] = emoji;
    this.setState({ ...this.state, emojis: emojis });
  }

  handleResults = () => {
    let max = this.state.emojis.reduce((a, b) => (a.like > b.like ? a : b));
    // let max = this.state.emojis.find((a, b) => (a.like > b.like ? a : b));
    if (max) {
      this.setState({ ...this.state, resaltShow: true, emojiWon: max.unicode });
    }
  };

  handleShowEmojis = () => {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
    // this.createArray()
  };

  // createArray() {
  //   const rangeEmojis = Array.from({ length: 20 }, (v, i) => (i + 128513))
  //   let arr = rangeEmojis.map(item => {
  //     let emoji = {
  //       unicode: item,
  //       like: 0
  //     }
  //     return emoji
  //   })
  //   console.log('arr', ...arr)
  //   this.setState({ ...this.state, emojis:arr })
  //   console.log({ ...this.state})

  // }

  render() {
    return (
      <div className="App">
        <h3>Emojis</h3>
        <div className="section">
          <p>
            Choose anyone emoji who do you want {String.fromCodePoint("9193")}.
          </p>
          <button onClick={this.handleShowEmojis}>Show emoji</button>
        </div>
        <div className="Emoji">
          {this.state.isOpen
            ? this.state.emojis.map((item, index) => {
                return (
                  <Emoji
                    key={index}
                    unicode={item.unicode}
                    onClick={this.handleClick.bind(this, index)}
                  />
                );
              })
            : null}
        </div>

        <button onClick={this.handleResults}>Show Results</button>

        {this.state.resaltShow ? (
          <p>Won emoji {String.fromCodePoint(this.state.emojiWon)}.</p>
        ) : null}
      </div>
    );
  }
}

export default App;
