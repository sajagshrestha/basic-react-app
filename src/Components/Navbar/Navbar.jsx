import React from "react";

import { NavWrapper, Logo } from "./Navbar.styles";

class Navbar extends React.Component {
	render() {
		return (
			<NavWrapper>
				<Logo>GalleryAppMaybe</Logo>
			</NavWrapper>
		);
	}
}

export default Navbar;
