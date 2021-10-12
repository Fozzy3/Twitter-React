import React, { Component } from "react";
import "./Test.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import Noticias from "./Noticias";

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: [],
    };
    this.renderTweets = this.renderTweets.bind(this);
  }

  async componentDidMount() {
    this.getTweets();
  }

  getTweets = async () => {
    const res = await axios.get(
      "https://saldatweets.herokuapp.com/publications/"
    );
    this.setState({
      tweet: res.data,
    });
  };

  deleteUser = async (id) => {
    //wait axios.delete("https://saldatweets.herokuapp.com/publications/" + id);
    console.log(id);
  };

  renderTweets = () => {
    return (
      <div className="muro_noticias">
        {this.state.tweet.map((x) => {
          return (
            <div className="noticia">
              <div className="user_">
                <FontAwesomeIcon className="icono" icon={faUser} />
              </div>
              <div className="contenido_noticia" key={x._id}>
                <div className="user_name">
                  <p>
                    {x.author}{" "}
                    <span>
                      @ {x.type} <span> {x.date.slice(0, 10)}</span>
                    </span>{" "}
                  </p>
                </div>
                <div className="noticias_twetit">
                  <p>{x.content}</p>
                </div>
                <div className="social-Interact">
                  <div>
                    <FontAwesomeIcon className="socialIcon" icon={faComment} />
                    <FontAwesomeIcon className="socialIcon" icon={faRetweet} />
                    <FontAwesomeIcon className="socialIcon" icon={faHeart} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return <div>{this.renderTweets()}</div>;
  }
}

export default Tweets;
