import React from "react";
import "./Noticias.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faImage,
  faChartBar,
  faSmile,
  faCalendarAlt,
} from "@fortawesome/free-regular-svg-icons";
import { faUser, faGift } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Component } from "react";

export default class Noticias extends Component {
  state = {
    users: [],
    tweet: "",
    type: "",
    author: "",
  };

  onChangeTweet = (e) => {
    this.setState({
      tweet: e.target.value,
    });
  };

  onChangeUser = async (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  onChangeAuthor = async (e) => {
    this.setState({
      author: e.target.value,
    });
  };

  onClick = async (e) => {
    e.preventDefault();
    await axios.post("https://saldatweets.herokuapp.com/publications", {
      content: this.state.tweet,
      type: this.state.type,
      author: this.state.author,
    });
    this.setState({ tweet: "", type: "", author: "" });
  };

  render() {
    return (
      <>
        <div className="home_">
          <h2>Home</h2>
          <h2>
            <FontAwesomeIcon className="icono" icon={faStar} />
          </h2>
        </div>

        <div className="publicar">
          <div className="user">
            <FontAwesomeIcon className="icono" icon={faUser} />
          </div>
          <div className="publish">
            <div className="escribir_twitit">
              <input
                id="author"
                type="text"
                placeholder="author"
                value={this.state.author}
                onChange={this.onChangeAuthor}
              ></input>
              <textarea
                id="textarea"
                placeholder=" What's happening?"
                maxLength="140"
                value={this.state.tweet}
                onChange={this.onChangeTweet}
              ></textarea>
              <div className="everyone">
                <p>@</p>
                <input
                  id="new-tweet"
                  type="text"
                  value={this.state.type}
                  onChange={this.onChangeUser}
                ></input>
              </div>
            </div>
            <div className="opciones_twitit">
              <div className="iconos">
                <FontAwesomeIcon className="icono" icon={faImage} />
                <FontAwesomeIcon className="icono" icon={faGift} />
                <FontAwesomeIcon className="icono" icon={faChartBar} />
                <FontAwesomeIcon className="icono" icon={faSmile} />
                <FontAwesomeIcon className="icono" icon={faCalendarAlt} />
              </div>
              <button className="twitear" type="click" onClick={this.onClick}>
                <p>Tweet</p>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
