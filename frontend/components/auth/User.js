import React from "react";
import { gql, useQuery } from "@apollo/client";

export const CURRENT_USER_QUERY = gql`
	query {
		authenticatedItem {
			... on User {
				id
				name
				username
				email
				role {
					canAccessAdminFunctionClient
				}
			}
		}
	}
`;

function useUser() {
	const { data } = useQuery(CURRENT_USER_QUERY);
	// console.log({ data });
	return data?.authenticatedItem;
}

export default useUser;
