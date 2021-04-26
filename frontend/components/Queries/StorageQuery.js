import { gql, useQuery } from "@apollo/client";

export const ALL_STORAGE_UNIT_QUERY = gql`
	query {
		allStorageUnits {
			id
			price
			description
			availability
			unitNum
			unit {
				storageUnitType
			}
		}
	}
`;

function storageUnits() {
	const { data } = useQuery(ALL_STORAGE_UNIT_QUERY);
	return data?.allStorageUnits;
}

export default storageUnits;
