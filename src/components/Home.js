import React from 'react'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faEllipsisH, faUser} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



export default function Home() {
    return (
        <div className="home">
                <div className="menus">
                    <ol>
                        <li><FontAwesomeIcon className="icono twitter" icon={faTwitter} /></li>
                        <li><FontAwesomeIcon className="icono" icon={faHome} />Home</li>
                        <li><FontAwesomeIcon className="icono" icon={faHashtag} />Explore</li>
                        <li><FontAwesomeIcon className="icono" icon={faBell} />Notificaciones</li>
                        <li><FontAwesomeIcon className="icono" icon={faEnvelope} />Mensajes</li>
                        <li><FontAwesomeIcon className="icono" icon={faBookmark} />BookMarks</li>
                        <li><FontAwesomeIcon className="icono" icon={faList} />List</li>
                        <li><FontAwesomeIcon className="icono" icon={faUser} />Profile</li>
                        <li><FontAwesomeIcon className="icono" icon={faEllipsisH} />More</li>
                        <li>Tweet</li>
                    </ol>
                </div>
            
        </div>
    )
}
