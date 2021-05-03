import React from "react";
import styled from "styled-components";
import useUser from "./User";

function Account() {
	const User = useUser();
	console.log({ User });
	return (
		<AccountStyles>
			{User ? (
				<>
					<div className="header">
						<h2>Welcome back {User?.name}</h2>
					</div>
					<div className="container">
						<div className="accountInfo">
							<p>Email: {User?.email}</p>
							<p>Address: {User?.address}</p>
							<p>City: {User?.city}</p>
							<p>State: {User?.state}</p>
							<p>Zipcode: {User?.zipcode}</p>
						</div>
						<div className="storageRequest">
							{User?.rental ? (
								<>
									<p>
										Rental request:{" "}
										{User?.rental?.rental?.map((item, i) => (
											<p>{item?.storageUnitType}</p>
										))}
									</p>
									<p>Status: {User?.rental?.availability}</p>
								</>
							) : null}
						</div>
					</div>
				</>
			) : null}
		</AccountStyles>
	);
}

export default Account;

const AccountStyles = styled.div`
	min-height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.header {
		margin: 10rem;
	}

	.container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		max-width: 1300px;
		margin: 3rem 0;
		gap: 10rem;

		@media (max-width: 630px) {
			flex-direction: column;
			gap: 3rem;
		}
	}
`;
