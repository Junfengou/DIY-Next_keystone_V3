import { gql, useQuery } from "@apollo/client";

export const ALL_RENTALS_QUERY = gql`
	query {
		allRentals {
			id
			name
			rental {
				storageUnitType
			}
		}
	}
`;

function Rentals() {
	const { data } = useQuery(ALL_RENTALS_QUERY);
	return data?.allRentals;
}

export default Rentals;
