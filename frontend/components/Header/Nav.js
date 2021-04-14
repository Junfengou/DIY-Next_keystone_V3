import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NavStyles = styled.div`
	/* border: solid blue; */
	color: white;
	display: flex;
	justify-content: space-around;
	width: 30%;
	max-width: 500px;
	min-width: 300px;

	@media (max-width: 740px) {
		display: none;
	}
`;

function Nav() {
	return (
		<NavStyles>
			<Link href="/about">About</Link>
			<Link href="/faq">FAQ</Link>
			<Link href="/storages">Storages</Link>
		</NavStyles>
	);
}

export default Nav;
