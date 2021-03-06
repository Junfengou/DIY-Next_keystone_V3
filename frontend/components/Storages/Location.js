import React from "react";
import styled from "styled-components";

function Location() {
	return (
		<LocationStyles>
			<div className="photo">
				<img
					src="https://res.cloudinary.com/junworks/image/upload/v1620444710/DIY%20Garage/Untitled_t0cqpv.jpg"
					alt="omaha"
				/>
			</div>

			<div className="info">
				<h1>Omaha - Elkhorn</h1>
				<h5>
					22101 West Maple Rd <br /> Omaha, NE 68022
				</h5>
				<h4>402-289-5099</h4>
				<h4>diystorage@yahoo.com</h4>
				<h4>
					Mon - Fri : 8 - 5<br />
					Sat: 9 - 2
				</h4>
			</div>

			<div className="features">
				<p>Features</p>
				<p>----------</p>
				<ul>
					<li>Smart access</li>
					<li>motion camera</li>
					<li>Flexible payment</li>
					<li>Discount options</li>
				</ul>
			</div>
		</LocationStyles>
	);
}

export default Location;

const LocationStyles = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	.photo {
		width: 100%;
		height: 12rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		img {
			height: 12rem;
			object-fit: contain;
			border: solid 4px var(--orange);
		}
	}

	.info {
		display: grid;
		grid-template-rows: 2rem;
		grid-template-columns: 1fr;
		width: 100%;
		h1 {
			font-size: 1.7rem;
		}

		h4,
		h5 {
			/* line-height: 2rem; */
			font-size: 1.3rem;
		}
	}

	.features {
		font-size: 1.3rem;
		width: 100%;
		line-height: 2rem;
	}

	@media (max-width: 1000px) {
		/* flex-direction: row; */
		height: 100%;

		.photo {
			height: 16rem;
			img {
				min-height: 16rem;
				object-fit: cover;
				border: none;
			}
		}

		.info {
			justify-items: center;
			h1 {
				font-size: 1.4rem;
			}

			h4 {
				/* line-height: 1rem;
				font-size: 1.2rem;
				margin-bottom: 1rem; */
				display: none;
			}

			h6 {
				/* line-height: 2rem;
				font-size: 1.3rem; */
				display: none;
			}
		}

		.features {
			display: none;
		}
	}
`;
