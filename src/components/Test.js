import React, { Component } from "react";
import "./Test.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faImage,
  faChartBar,
  faSmile,
  faCalendarAlt,
} from "@fortawesome/free-regular-svg-icons";
import {
  faUser,
  faGlobeAmericas,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="noticias">
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
              <textarea
                id="textarea"
                placeholder=" Whas's happening?"
                maxLength="140"
              ></textarea>
              <div className="everyone">
                <p>
                  <FontAwesomeIcon className="icono" icon={faGlobeAmericas} />
                  Everyone can reply
                </p>
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
              <div className="twitear">
                <p>Tweet</p>
              </div>
            </div>
          </div>
        </div>
        <div className="muro_noticias">
          {/*Codigo de Creacion de una Noticia*/}
          <div className="noticia">
            <div className="user_">
              <FontAwesomeIcon className="icono" icon={faUser} />
            </div>
            <div className="contenido_noticia">
              <div className="user_name">
                <p>
                  {this.state.tweet.author}{" "}
                  <span>@{this.state.tweet.date}</span>{" "}
                </p>
              </div>
              <div className="noticias_twetit">
                <p>{this.state.tweet.content}</p>
              </div>
            </div>
          </div>
          {/*Fin de Codigo de Creacion de una Noticia*/}
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
                  Soy otro ejemplo de noticia aun mas facherito que el anterior
                  UwU
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tweets;
