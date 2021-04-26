import React from "react";
import rentals from "../Queries/RentalQuery";
import styled from "styled-components";
import employees from "../Queries/EmployeeQuery";
import storageUnitsTypes from "../Queries/StorageUnitTypeQuery";
import storageUnits from "../Queries/StorageQuery";
import { userRental } from "../../lib/RentalState";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

const UPDATE_STORAGE_STATUS_MUTATION = gql`
	mutation UPDATE_STORAGE_STATUS_MUTATION(
		$storageMutation: [StorageUnitsUpdateInput]
	) {
		updateStorageUnits(data: $storageMutation) {
			price
		}
	}
`;

const CREATE_RENTAL_LIST_MUTATION = gql`
	mutation CREATE_RENTAL_LIST_MUTATION(
		$rentalID: ID!
		$employeeID: ID!
		$storageID: [StorageUnitWhereUniqueInput]
		$storageUnitTypeID: [StorageUnitTypeWhereUniqueInput]
	) {
		createRentalList(
			data: {
				rentby: { connect: { id: $rentalID } }
				employee: { connect: { id: $employeeID } }
				storageUnit: { connect: $storageID }
				storageType: { connect: $storageUnitTypeID }
			}
		) {
			rentby {
				name
			}
		}
	}
`;

function MainAccess() {
	const rentalArr = rentals();
	const employeeArr = employees();
	const StorageUnitArr = storageUnits();
	const StorageUnitTypesArr = storageUnitsTypes();
	const {
		rentalID,
		employeeID,
		storageID,
		storageUnitTypeID,
		storageMutation,
		grabRentalID,
		grabEmployeeID,
		grabStorageUnitID,
		grabStorageUnitTypeID,
		displayRental,
		displayEmployee,
		displayStorage,
		displayUnitTypes,
		deleteRentalID,
		deleteEmployeeID,
		deleteStorageUnitType,
		deleteStorageUnit,
	} = userRental();
	console.log(
		{ rentalID },
		{ employeeID },
		{ storageID },
		{ storageUnitTypeID },
		{ storageMutation }
	);
	const [updateStorageUnits] = useMutation(UPDATE_STORAGE_STATUS_MUTATION, {
		variables: { storageMutation },
	});

	const [createRentalList] = useMutation(CREATE_RENTAL_LIST_MUTATION, {
		variables: { rentalID, employeeID, storageID, storageUnitTypeID },
	});

	async function createRentaListItems() {
		await updateStorageUnits();
		await createRentalList();
		setTimeout(() => {
			window.location.reload();
		}, 1500);
	}
	return (
		<MainAccessStyles>
			<div className="InfoList">
				{/* Renal display */}
				<CardInfoStyles>
					{rentalArr?.map((person, i) => (
						<div className="Container">
							<p>{person.name}</p>
							{person.rental.map((item, i) => (
								<p>{item.storageUnitType}</p>
							))}
							<button onClick={() => grabRentalID(person.id, person.name)}>
								add
							</button>
						</div>
					))}
				</CardInfoStyles>

				{/* Employee display */}
				<CardInfoStyles>
					{employeeArr?.map((employee, i) => (
						<div className="Container">
							<p>{employee.title}</p>
							<button
								onClick={() => grabEmployeeID(employee.id, employee.title)}
							>
								add
							</button>
						</div>
					))}
				</CardInfoStyles>

				{/* Storage units display */}
				<CardInfoStyles>
					{StorageUnitArr?.map((unit, i) => (
						<div className="Container">
							<p>
								#{unit.unitNum} - {unit.availability}
							</p>
							<button
								onClick={() =>
									grabStorageUnitID(
										unit.id,
										unit.price,
										unit.description,
										unit.availability,
										unit.unitNum,
										unit.unit.storageUnitType
									)
								}
							>
								add
							</button>
						</div>
					))}
				</CardInfoStyles>

				{/* Storage units types display */}
				<CardInfoStyles>
					{StorageUnitTypesArr?.map((unitType, i) => (
						<div className="Container">
							<p>{unitType.storageUnitType}</p>
							<button
								onClick={() =>
									grabStorageUnitTypeID(unitType.id, unitType.storageUnitType)
								}
							>
								add
							</button>
						</div>
					))}
				</CardInfoStyles>
			</div>
			<div className="DataDisplay">
				<div className="container">
					{displayRental && (
						<button onClick={() => deleteRentalID()}>{displayRental}</button>
					)}
				</div>
				<div className="container">
					{displayEmployee && (
						<button onClick={() => deleteEmployeeID()}>
							{displayEmployee}
						</button>
					)}
				</div>
				<div className="container">
					{displayStorage.map((item) => (
						<button onClick={() => deleteStorageUnit(item.id)}>
							{item.unitType}
						</button>
					))}
				</div>
				<div className="container">
					{displayUnitTypes.map((item) => (
						<button onClick={() => deleteStorageUnitType(item.id)}>
							{item.unitType}
						</button>
					))}
				</div>
				<button onClick={createRentaListItems}>Update</button>
			</div>
		</MainAccessStyles>
	);
}

export default MainAccess;

const MainAccessStyles = styled.div`
	height: 100vh;
	display: grid;
	gap: 2rem;
	grid-template-rows: repeat(2, 1fr);
	justify-items: center;
	align-items: center;

	.InfoList {
		border: solid red;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.DataDisplay {
		/* border: solid blue; */
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.container {
		padding: 2rem;
		border: solid blue;
		display: flex;
		gap: 2rem;
	}
`;

const CardInfoStyles = styled.div`
	/* height: 10rem; */
	/* width: 8rem; */
	/* background-color: var(--grey); */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	border: solid green;
	margin: 2rem;
	padding: 2rem;

	.Container {
		display: flex;
		gap: 2rem;
	}
`;

/*
	1. Find the correct rental by it's ID
	2. map through the unitTypes within the rentalArr and throw each item in the component that handles storage mutation
	3. write a mutation to modify the storage to "RESERVED" status
	4. 
*/
