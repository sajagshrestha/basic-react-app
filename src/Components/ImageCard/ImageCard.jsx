import React from "react";

import { ImageCardContainer, ImageContainer, Title } from "./Image.styles";

class ImageCard extends React.Component {
	render() {
		const { src, name } = this.props;
		return (
			<ImageCardContainer>
				<ImageContainer>
					<img src={src} alt={name} />
				</ImageContainer>
				<Title>{name}</Title>
			</ImageCardContainer>
		);
	}
}

export default ImageCard;
