import React from "react";
import { Component, createRef } from "react";
import "./App.css";
import data from "./data.json";
import { renderCarentType, treeToMap } from "./utils";

class App extends Component {
  constructor() {
    super();
    this.map = treeToMap(data);
    this.ref = createRef();
    this.state = {
      expandedFolders: ["/Common7", "/Common7/IDE", "/Common7/Tools"],
      // value: "",
    };
  }

  handleFilter = () => {
    console.log("this.ref.current.value)", this.ref.current.value);
    let arr = Object.entries(this.map);
    let resaltFilter = arr
      .filter(([, value]) => value.startsWith(this.ref.current.value))
      .map((i) => i[0].split("/").filter((item) => !!item))
      .map((currentNumber) => {
        let arr = currentNumber.reduce((accumulator, current) => {
          let last = accumulator[accumulator.length - 1];
          if (last) {
            return [...accumulator, `${last}/${current}`];
          }
          return [...accumulator, `/${current}`];
        }, []);
        return arr;
      })
      .flat();
    console.log("resaltFilter", resaltFilter);
    this.setState({ ...this.state, expandedFolders: resaltFilter });

    // if (!resaltFilter.lenght) {
    //   this.setState({
    //     ...this.state,
    //     expandedFolders: ["/Common7", "/DIA SDK", "/SDK", "/VC"],
    //   });
    // }
  };

  render() {
    console.log("this.state", data);
    return (
      <>
        <div className="Head">
          <input ref={this.ref} className="input" placeholder="text" />
          <button onClick={this.handleFilter}>Search</button>
        </div>
        <ul className="App">
          {renderCarentType(data, this.state.expandedFolders)}
        </ul>
      </>
    );
  }
}

export default App;
