import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Title from "./components/title";
import Area from "./components/area";
import Result from "./components/result";

class App extends Component {
  state = {
    mark: `React + marked + highlight.js

    **Code Sample:**
    \`\`\`javascript
    import marked from "marked";
    
    marked.setOptions({
      langPrefix: "hljs language-",
      highlight: function(code) {
        return require("highlight.js").highlightAuto(code, ["html", "javascript"])
          .value;
      }
    });
    \`\`\`
    `
  };
  
 
  

  
  render() {
    const changeHandel=(e) =>{
      const text = e.target.value;
      this.setState({ mark: text });
    }
    return (
      <div className="container">
        <Title titre="React app" desc="Mehdi boulloul et khadija abyade" prof=" Gounane said"/>
        <div className="row">
          <Area fncEvnt={(e)=>changeHandel(e)} mark={this.state.mark} />
          <Result mark={this.state.mark}/>
          
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,
  rootElement
);
