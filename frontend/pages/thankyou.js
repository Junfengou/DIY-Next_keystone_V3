import React from "react";
import styled from "styled-components";

function thankyou() {
	return (
		<ThankYouStyles>
			<h1>
				Thank you for your rental request! The owner will contact you shortly
			</h1>
		</ThankYouStyles>
	);
}

export default thankyou;

const ThankYouStyles = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
