import React from "react";
import dTree from "d3-dtree";

class FamilyGraph extends React.Component {
  componentDidMount() {
    if (this.props.data !== undefined) {
      this.renderGraph(this.props.data);
    }
  }

  componentDidUpdate() {
    if (this.props.data !== undefined) {
      this.renderGraph(this.props.data);
    }
  }

  render() {
    return (
      <>
        <h2>Graph</h2>
        <div id="graph" />
      </>
    );
  }

  renderGraph(data) {
    const options = {
      target: "#graph",
      debug: false,
      width: 600,
      height: 400,
      callbacks: {
        /*
                Callbacks should only be overwritten on a need to basis.
                See the section about callbacks below.
              */
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      nodeWidth: 100,
      styles: {
        node: "node",
        linage: "linage",
        marriage: "marriage",
        text: "nodeText"
      }
    };

    // Container vor erneutem Graph erstellen leeren.
    document.getElementById("graph").innerHTML = "";
    dTree.init(data, this.graphOptions);
  }
}

export default FamilyGraph;