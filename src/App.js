import { React, Component } from "react";
import "./App.css";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette goes here</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>Individual palette here</h1>}
        />

        {/* <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div> */}
      </Switch>
    );
  }
}

export default App;
