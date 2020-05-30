import React, { Component, useState  } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";


function Map() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
  class Home extends Component {
    
    render() {
      return (
        <Map></Map>
      );
    }
  }
  export default Home;
