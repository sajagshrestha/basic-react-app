import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Gallery from "./Components/Gallery/Gallery";

import { MainContainer } from "./App.styles";

class App extends React.Component {
	render() {
		return (
			<MainContainer>
				<Navbar />
				<Gallery />
			</MainContainer>
		);
	}
}

export default App;
