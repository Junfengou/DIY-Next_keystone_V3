import React from "react";
import styled from "styled-components";

function reserve() {
	return <ReserveStyles>reserve page</ReserveStyles>;
}

export default reserve;

const ReserveStyles = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
