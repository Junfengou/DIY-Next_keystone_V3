import React from "react";
import styled from "styled-components";
import { userRental } from "../../lib/RentalState";
import SickButton from "../styles/SickButton";

function StorageUnitz({ item }) {
	const { storageUnitType, unitType, id } = item;
	const { grabUnit } = userRental();
	return (
		<StorageUnitStyles>
			<div className="tagHeader">
				<h3>{storageUnitType}</h3>
				<h4>${unitType.price / 100}</h4>
			</div>
			<div className="tagBody">
				<h4>{unitType.description}</h4>
			</div>
			<div className="tagFooter">
				<h4>Unit #{unitType.unitNum}</h4>
				{/* <h4>{unitType.availability}</h4> */}
				<SickButton
					onClick={() =>
						grabUnit(id, unitType.price, storageUnitType, unitType.unitNum)
					}
				>
					Reserve
				</SickButton>
			</div>
		</StorageUnitStyles>
	);
}

export default StorageUnitz;

const StorageUnitStyles = styled.div`
	border: solid 2px var(--orange);
	display: grid;
	grid-template-rows: 5rem max-content 4rem;
	grid-template-columns: 1fr;
	background: var(--lightGrey);
	.tagHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 2rem;
	}

	.tagBody {
		margin: 0 2rem;
	}

	.tagFooter {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;
