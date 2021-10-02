import React from 'react'
import './Principal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export default function Principal() {
    return (
        <div className="principal" >
            <div className="barra">
            <input type="text" className="buscar" placeholder="Search" />
            </div>
            <div className="noticias_post">
            </div>
            
        </div>
    )
}