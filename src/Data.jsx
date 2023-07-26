import React, { Component } from "react";
import "./ui.css";

export default class Data extends Component {
  constructor() {
    super();
  }
  render() {
    const { cover, music, games, setting } = this.props.show;
    console.log(games);
    return (
      <>
        <div>{cover ? <>Cover</> : <></>}</div>
        <div>{music ? <>music</> : <></>}</div>
        <div>{games ? <>games</> : <></>}</div>
        <div>{setting ? <>setting</> : <></>}</div>
      </>
    );
  }
}
