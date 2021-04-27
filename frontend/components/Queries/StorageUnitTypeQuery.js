import { gql, useQuery } from "@apollo/client";

export const ALL_STORAGE_UNIT_TYPES_QUERY = gql`
	query {
		allStorageUnitTypes {
			id
			storageUnitType
		}
	}
`;

function StorageUnitsTypes() {
	const { data } = useQuery(ALL_STORAGE_UNIT_TYPES_QUERY);
	return data?.allStorageUnitTypes;
}

export default StorageUnitsTypes;
