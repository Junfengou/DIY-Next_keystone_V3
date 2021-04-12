import React from "react";
import styled from "styled-components";
import StorageUnits from "./StorageUnits";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import ReserveForm from "./ReserveForm";

export const ALL_STORAGE_UNIT_QUERY = gql`
	query ALL_STORAGE_UNIT_QUERY {
		allStorageUnitTypes {
			id
			storageUnitType
			unitType {
				availability
				unitNum
				price
			}
		}
	}
`;

function reserve() {
	const { data, loading, error } = useQuery(ALL_STORAGE_UNIT_QUERY);
	return (
		<ReserveStyles>
			<h2>Welcome to DIY Storage</h2>
			<StorageUnits data={data}>Storage units</StorageUnits>
			<ReserveForm />
		</ReserveStyles>
	);
}

export default reserve;

const ReserveStyles = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 5rem max-content 1fr;
	padding: 10rem;
	justify-items: center;
	align-items: center;

	.header {
		border: solid red;
	}

	.form {
		border: solid green;
	}
`;
