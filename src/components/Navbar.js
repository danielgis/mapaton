import React from "react";
import './Navbar.css'

export const NavbarComp = () => (
    <div className="containerTool">
        <h1 className="title">INGEOANDES</h1>
        <label className="label is-small">Dibuja el área de interés</label>
        <div className="buttons is-centered">
          <button id="point" className="buttonDrawActivateClsPp button is-info is-small">
            <span className="icon is-small"><i className="far fa-circle"></i></span>
          </button>
          <button id="freehand_polygon" className="buttonDrawActivateClsPp button is-info is-small">
            <span className="icon is-small"><i className="fas fa-draw-polygon"></i></span>
          </button>       
        </div>
        <label className="label is-small">Lorem, ipsum dolor sit amet consectetur</label>
        <input type="text" className="input is-small" />
        <div className="buttons is-right">
          <button className="button is-primary is-small">Lorem ipsum</button>
        </div>
        <progress className="progress is-small is-primary" max="100">15%</progress>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quaerat omnis atque ducimus eaque facilis illo voluptate officia nemo maxime nam perferendis repellat laborum, amet quos dolorum! Possimus, commodi doloremque.</p>
        <br />
        <img src='https://picsum.photos/seed/picsum/640/300' alt="123"/>
    </div>
)