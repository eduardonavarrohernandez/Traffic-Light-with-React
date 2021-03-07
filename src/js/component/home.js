import React from "react";

import { render } from "react-dom/cjs/react-dom.production.min";
import { Component } from "react/cjs/react.production.min";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			estadoRoja: "apagada",
			estadoAmarilla: "apagada",
			estadoVerde: "apagada"
		};
	}
	render() {
		return (
			<div className="contenedor">
				<div className="palo"></div>
				<div className="semaforo">
					<div
						className="luz rojo"
						id={this.state.estadoRoja}
						onClick={() =>
							this.setState({
								estadoRoja: "select",
								estadoAmarilla: "apagada",
								estadoVerde: "apagada"
							})
						}></div>
					<div
						className="luz amarillo"
						id={this.state.estadoAmarilla}
						onClick={() =>
							this.setState({
								estadoRoja: "apagada",
								estadoAmarilla: "select",
								estadoVerde: "apagada"
							})
						}></div>
					<div
						className="luz verde"
						id={this.state.estadoVerde}
						onClick={() =>
							this.setState({
								estadoRoja: "apagada",
								estadoAmarilla: "apagada",
								estadoVerde: "select"
							})
						}></div>
				</div>
			</div>
		);
	}
}

export default Home;
