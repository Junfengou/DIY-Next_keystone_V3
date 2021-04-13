import React from "react";
import styled from "styled-components";
import { userRental } from "../../lib/RentalState";

function StorageUnit({ item }) {
	const { storageUnitType, id, unitType } = item;
	const { grabUnit } = userRental();
	return (
		<SingleUnitStyles
			onClick={() =>
				grabUnit(id, unitType.price, storageUnitType, unitType.unitNum)
			}
		>
			<h3>{storageUnitType}</h3>
			<h5>Unit # {unitType.unitNum}</h5>
			<h5>${unitType.price / 100}</h5>
		</SingleUnitStyles>
	);
}

function StorageUnits({ data }) {
	return (
		<StorageStyles>
			<h3>Pick out a storage unit</h3>
			<StorageUnitStyles>
				{data?.allStorageUnitTypes.map((item, i) => {
					if (item.unitType.availability === "AVAILABLE") {
						return <StorageUnit key={i} item={item} />;
					}
				})}
			</StorageUnitStyles>
		</StorageStyles>
	);
}

export default StorageUnits;

const StorageStyles = styled.div`
	max-width: 1200px;
	display: grid;
	grid-template-rows: max-content 1fr;
	grid-template-columns: 1fr;
	justify-items: center;
	align-items: center;
	padding: 5rem;

	.date {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
`;

const StorageUnitStyles = styled.div`
	padding: 1rem;
	display: flex;
	background: transparent;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

const SingleUnitStyles = styled.button`
	padding: 0 3rem;
`;
