import React from "react";
import BarChart from "react-bar-chart";

const data = [
  { text: "Javascript", value: 90, color: "#101010" },
  { text: "CSS", value: 80 },
  { text: "HTML", value: 80 },
  { text: "React.js", value: 75 },
  { text: "Angular", value: 65 },
  { text: "Node.js", value: 70 },
  { text: "SQL", value: 50 },
  { text: "NoSQL", value: 55 }
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const Example = React.createClass({
  getInitialState() {
    return { width: 500 };
  },

  componentDidMount: () => {
    window.onresize = () => {
      this.setState({ width: this.refs.root.offsetWidth });
    };
  },

  handleBarClick(element, id) {
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  },

  render() {
    return (
      <div className="chart" ref="root">
        <div style={{ width: "10%" }}>
          <BarChart
            width={this.state.width}
            height={400}
            margin={margin}
            data={data}
            onBarClick={this.handleBarClick}
          />
        </div>
      </div>
    );
  }
});

export default Example;
