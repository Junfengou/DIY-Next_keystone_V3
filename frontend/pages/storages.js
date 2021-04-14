import React from "react";
import Storages from "../components/Storages/Storages";
import { useRouter } from "next/dist/client/router";

function storages() {
	const { query } = useRouter();
	const page = Number(query.page);
	return (
		<div>
			<Storages page={page} />
		</div>
	);
}

export default storages;
