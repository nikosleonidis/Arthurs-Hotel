import React from "react";

import MenuList from "../../Files/MenuList";
import Icon from "../../Files/Icon";

export default class Content extends React.Component {
	render() {
		return (
			<div className="content">
				<MenuList />
				<div className="p">
					Республика Крым,
					<br /> Береговое, ул. Приморская, 1В
				</div>
				<div className="tel">+7 (958) 756-80-39</div>
				<Icon />
			</div>
		);
	}
}