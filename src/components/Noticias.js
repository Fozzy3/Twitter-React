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
import {
  faUser,
  faGlobeAmericas,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

export default function Noticias() {
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
    </div>
  );
}
