import React from "react";
import Link from "next/link";
import styled from "styled-components";
import UsernameStyles from "../styles/UsernameStyles";
import SickButton from "../styles/SickButton";

function MainAccess() {
	return (
		<MainAccessMenuStyles>
			<>
				<UsernameStyles>Admin access dashboard</UsernameStyles>
			</>
			<div className="container">
				<SickButton>
					<Link href="/admincreaterentallist">Create Rental List</Link>
				</SickButton>

				<SickButton>
					<Link href="/adminreadrentallist">Read Rental List</Link>
				</SickButton>

				<SickButton>
					<Link href="/adminemployee">Create Employee</Link>
				</SickButton>

				<SickButton>
					<Link href="/adminstorage">Create Storage</Link>
				</SickButton>

				<SickButton>
					<Link href="/adminrole">Assign permission</Link>
				</SickButton>
			</div>

			{/* Add another button for read rental list */}
		</MainAccessMenuStyles>
	);
}

export default MainAccess;

const MainAccessMenuStyles = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	align-items: center;

	.container {
		display: flex;
		gap: 2rem;
	}
`;
