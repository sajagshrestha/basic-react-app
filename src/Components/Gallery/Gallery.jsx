import React from "react";
import ImageCard from "../ImageCard/ImageCard";

import { GalleryWrapper } from "./Galary.styles";

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.images = [
			{
				name: "Women",
				src: "https://images.pexels.com/photos/6679919/pexels-photo-6679919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
			},
			{
				name: "Flower",
				src: "https://images.pexels.com/photos/5759547/pexels-photo-5759547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			},
			{
				name: "Flower",
				src: "https://images.pexels.com/photos/5759547/pexels-photo-5759547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			},
			{
				name: "Flower",
				src: "https://images.pexels.com/photos/5759547/pexels-photo-5759547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			},
			{
				name: "Flower",
				src: "https://images.pexels.com/photos/5759547/pexels-photo-5759547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			},
		];
	}
	render() {
		return (
			<GalleryWrapper>
				{this.images.map((img) => (
					<ImageCard src={img.src} name={img.name} />
				))}
			</GalleryWrapper>
		);
	}
}

export default Gallery;
