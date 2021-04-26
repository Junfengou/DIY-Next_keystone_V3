import React from "react";
import MainAccess from "../components/AdminAccess/MainAccess";
import NoAccess from "../components/AdminAccess/NoAccess";
import useUser from "../components/auth/User";

function test() {
	const user = useUser();
	const userPermission = user?.role?.canAccessAdminFunctionClient;

	return (
		<div>
			{!userPermission ? <NoAccess /> : <MainAccess />}
			{/* hmm */}
		</div>
	);
}

export default test;
