
import React from "react";

export default class NotFound extends React.Component {
	isHome =
		window.location.pathname.includes("/home") ||
		window.location.pathname.includes("/rooms") ||
		window.location.pathname.includes("/service") ||
		window.location.pathname.includes("/reg");

	hStyle = this.isHome ? {display: "none"} : {display: "flex"};

	render() {
		return (
			<div style={this.hStyle} className="NotFound">
				Запрашиваемая страница не найдена
				<div id="printer-404">
					<div className="back"></div>
					<div className="body"></div>
					<div className="front"></div>
					<div className="paper1">
						<div>404</div>
					</div>
					<div className="paper2">
						<div>404</div>
					</div>
					<div className="mask"></div>
				</div>
				<a className="link" href="/home">
					Вернуться домой
				</a>
			</div>
		);
	}
}
