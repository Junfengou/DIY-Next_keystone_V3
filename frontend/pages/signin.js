import React from "react";
import styled from "styled-components";
import SignIn from "../components/auth/SignIn";

function signin() {
	return (
		<Loginstyles>
			<SignIn />
		</Loginstyles>
	);
}

export default signin;

const Loginstyles = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	background-color: rgba(240, 164, 50, 0.8);

	@media (max-width: 900px) {
		height: auto;
		padding: 8rem;
		flex-direction: column;
	}
`;
