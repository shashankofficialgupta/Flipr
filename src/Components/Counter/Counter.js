import React, { Component } from "react";
import axios from "axios";
import "./Counter.css";
import SideRightTable from "../SideRightTable/SideRightTable";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OOD: 0,
      DEX: 0,
      DEL: 0,
      INT: 0,
      NFI: 0,
      data: [],
      filteredData: [],
      className: "DEL",
    };
  }
  componentDidMount() {
    const body = {
      email: "shashank.guptags02@gmail.com",
    };
    const config = {
      headers: { Authorization: `Bearer tTU3gFVUdP` },
    };
    axios
      .post(
        "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
        body,
        config
      )
      .then((res) => {
        this.setState({ data: res.data }, () => this.handleFilter("DEL"));
        for (let i = 0; i < res.data.length; i++) {
          switch (res.data[i].current_status_code) {
            case "OOD":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  OOD: prevState.OOD + 1,
                };
              });
              break;
            case "DEL":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  DEL: prevState.DEL + 1,
                };
              });
              break;
            case "INT":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  INT: prevState.INT + 1,
                };
              });
              break;
            case "DEX":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  DEX: prevState.DEX + 1,
                };
              });
              break;
            case "NFI":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  NFI: prevState.NFI + 1,
                };
              });
              break;
            default:
              console.log("gh", i);
              break;
          }
        }
      });
  }
  handleFilter = (param) => {
    let tempData = [];
    tempData = this.state.data.filter((x) => {
      return x.current_status_code === param;
    });
    this.setState({ filteredData: tempData });
  };
  render() {
    const { OOD, DEL, INT, DEX, NFI, className } = this.state;
    return (
      <React.Fragment>
        <div className="counterBoard">
          <div
            className={
              className === "DEL" ? "counter_card click" : "counter_card"
            }
            onClick={() => {
              this.handleFilter("DEL");
              this.setState({ className: "DEL" });
            }}
          >
            <span className="counterType">DEL</span>
            <span className="counterCount">{DEL}</span>
          </div>
          <div
            className={
              className === "INT" ? "counter_card click" : "counter_card"
            }
            onClick={() => {
              this.handleFilter("INT");
              this.setState({ className: "INT" });
            }}
          >
            <span className="counterType">INT</span>
            <span className="counterCount">{INT}</span>
          </div>
          <div
            className={
              className === "OOD" ? "counter_card click" : "counter_card"
            }
            onClick={() => {
              this.handleFilter("OOD");
              this.setState({ className: "OOD" });
            }}
          >
            <span className="counterType">OOD</span>
            <span className="counterCount">{OOD ? OOD : 0}</span>
          </div>
          <div
            className={
              className === "DEX" ? "counter_card click" : "counter_card"
            }
            onClick={() => {
              this.handleFilter("DEX");
              this.setState({ className: "DEX" });
            }}
          >
            <span className="counterType">DEX</span>
            <span className="counterCount">{DEX}</span>
          </div>
          <div
            className={
              className === "NFI" ? "counter_card click" : "counter_card"
            }
            onClick={() => {
              this.handleFilter("NFI");
              this.setState({ className: "NFI" });
            }}
          >
            <span className="counterType">NFI</span>
            <span className="counterCount">{NFI}</span>
          </div>
        </div>
        <SideRightTable data={this.state.filteredData} />
      </React.Fragment>
    );
  }
}

export default Counter;
