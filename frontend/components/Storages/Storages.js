import React from "react";
import styled from "styled-components";
import Location from "./Location";
import { useQuery } from "@apollo/client";
import { perPage } from "../../config";
import gql from "graphql-tag";
import StorageUnitz from "./StorageUnitz";
import Pagination from "../Pagination/Pagination";

export const ALL_STORAGE_UNIT_QUERY = gql`
	query ALL_STORAGE_UNIT_QUERY($skip: Int = 0, $first: Int) {
		allStorageUnitTypes(first: $first, skip: $skip) {
			id
			storageUnitType
			unitType {
				availability
				unitNum
				price
				description
			}
		}
	}
`;

function Storages({ page }) {
	const { data, loading, error } = useQuery(ALL_STORAGE_UNIT_QUERY, {
		variables: {
			skip: page * perPage - perPage,
			first: perPage,
		},
	});
	return (
		<StorageStyles>
			{/* Reserved spot for pagination if needed */}
			<div className="pagination">
				<h3>Reserve your own storage today!</h3>
				<Pagination page={page || 1} />
			</div>
			<div className="contents">
				<div className="sideBar">
					<Location />
				</div>

				<div className="items">
					{data?.allStorageUnitTypes.map((item, i) => {
						if (item.unitType.availability === "AVAILABLE") {
							return <StorageUnitz key={i} item={item} />;
						}
					})}
				</div>
			</div>
		</StorageStyles>
	);
}

export default Storages;

const StorageStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: max-content 1fr;
	justify-items: center;
	align-items: center;
	padding-top: 10rem;

	.pagination {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: 1fr;
		justify-items: center;
		align-items: center;
	}

	.contents {
		display: flex;
		justify-content: center;
		gap: 5rem;
		padding: 5rem;

		.items {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		@media (max-width: 1000px) {
			flex-direction: column;
		}
	}
`;