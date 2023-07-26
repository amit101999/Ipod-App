import React, { Component, useEffect } from "react";
import "./ui.css";
import coverimg from "./images/coverPage.jpg";
import ZingTouch from "zingtouch";
import Data from "./Data";

export default class UI extends Component {
  constructor() {
    super();
    this.state = {
      angle: 0,
      cover: false,
      music: false,
      games: false,
      setting: false,
      menu: true,
    };
    this.currentAngle = 0;
  }

  controller = () => {
    var containerElement = document.getElementsByClassName("controls")[0];
    var activeRegion = ZingTouch.Region(containerElement);

    activeRegion.bind(containerElement, "rotate", (e) => {
      this.currentAngle = e.detail.angle;
      this.setState({
        angle: this.currentAngle,
      });
    });
  };

  componentDidMount() {
    this.controller();
  }
  componentDidUpdate(prop, prevstate) {
    const index = Math.floor(this.state.angle % 4);
    console.log(index % 4);

    if (prevstate.angle != this.state.angle && this.state.menu === true) {
      if (index == 0) {
        this.setState({
          cover: true,
          games: false,
          music: false,
          setting: false,
          display: false,
        });
      } else if (index == 1) {
        this.setState({
          cover: false,
          games: true,
          music: false,
          setting: false,
        });
      } else if (index == 2) {
        this.setState({
          cover: false,
          games: false,
          music: true,
          setting: false,
        });
      } else if (index == 3) {
        this.setState({
          cover: false,
          games: false,
          music: false,
          setting: true,
        });
      }
    }
  }

  selectMenu = () => {
    this.setState({ display: true, menu: false });
  };
  render() {
    return (
      <>
        <div className="ipod">
          <div className="top">
            {this.state.display ? (
              <Data show={this.state} />
            ) : (
              <>
                <div className="menu">
                  <h1>Ipod.js</h1>
                  <ul id="items">
                    <li className={this.state.cover ? "select" : "none"}>
                      Cover Flow
                    </li>
                    <li className={this.state.music ? "select" : "none"}>
                      Music
                    </li>
                    <li className={this.state.games ? "select" : "none"}>
                      Games
                    </li>
                    <li className={this.state.setting ? "select" : "none"}>
                      Settings{" "}
                    </li>
                  </ul>
                </div>
                <div className="cover-img">
                  <img src={coverimg} alt="" />
                </div>
              </>
            )}
          </div>
          <div className="controls">
            <div className="top">Menu</div>
            <div className="left">Previous</div>
            <div className="bottom">Play</div>
            <div className="right">Froward</div>
            <div className="click" onClick={() => this.selectMenu()}>
              Click
            </div>
          </div>
        </div>
      </>
    );
  }
}
