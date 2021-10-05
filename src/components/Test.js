import React, { Component } from "react";
import "./Test.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://saldatweets.herokuapp.com/publications"
    );
    const data = await response.json();
    console.log(data);
    this.setState({ tweet: data[2] });
  }

  render() {
    return (
      {
        /* ---------- Wall posts ------------ */
      },
      (
        <div className="muro_noticias">
          {/* --- Code for news from here: --- */}
          <div className="noticia">
            <div className="user_">
              <FontAwesomeIcon className="icono" icon={faUser} />
            </div>
            <div className="contenido_noticia">
              <div className="user_name">
                <p>
                  {this.state.tweet.author}{" "}
                  <span>@{this.state.tweet.type}</span>{" "}
                </p>
              </div>
              <div className="noticias_twetit">
                <p>{this.state.tweet.content}</p>
              </div>
            </div>
          </div>

          {/* --- To here. --- */}

          <div className="noticia">
            <div className="user_">
              <FontAwesomeIcon className="icono" icon={faUser} />
            </div>
            <div className="contenido_noticia">
              <div className="user_name">
                <p>
                  Otro Ejemplo Facharito <span>@Otrsdj · 2021-09-21</span>{" "}
                </p>
              </div>
              <div className="noticias_twetit">
                <p>
                  Soy otro ejemplo de noticia aun mas top que el anterior UwU
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Tweets;
