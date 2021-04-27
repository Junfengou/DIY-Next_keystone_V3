import React from "react";
import Link from "next/link";
import styled from "styled-components";

function MainAccess() {
	return (
		<MainAccessMenuStyles>
			<>
				<h1>Admin access dashboard</h1>
			</>
			<div className="container">
				<button>
					<Link href="/adminrentallist">Create Rental list</Link>
				</button>

				<button>
					<Link href="/adminemployee">Create Employee</Link>
				</button>

				<button>
					<Link href="/adminstorage">Create Storage</Link>
				</button>
			</div>

			{/* Add another button for read rental list */}
		</MainAccessMenuStyles>
	);
}

export default MainAccess;

const MainAccessMenuStyles = styled.div`
	height: 100vh;
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
