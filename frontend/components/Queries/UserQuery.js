import { gql, useQuery } from "@apollo/client";

export const ALL_USER_QUERY = gql`
	query {
		allUsers {
			id
			name
			email
		}
	}
`;

function Users() {
	const { data } = useQuery(ALL_USER_QUERY);
	return data?.allUsers;
}

export default Users;
