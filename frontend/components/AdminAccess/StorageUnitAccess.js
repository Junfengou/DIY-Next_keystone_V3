import React, { useState } from "react";
import StorageUnits from "../Queries/StorageQuery";
import StorageUnitsTypes from "../Queries/StorageUnitTypeQuery";
import { AccessStyles, CardInfoStyles } from "./RentalListAccess";
import CreateStorageUnit from "./StorageUnitRelated/CreateStorageUnit";
import CreateStorageUnitTypes from "./StorageUnitRelated/CreateStorageUnitTypes";

function StorageUnitAccess() {
	const StorageUnitArr = StorageUnits();
	const StorageUnitsTypesArr = StorageUnitsTypes();
	const [storageInfo, setStorageInfo] = useState("");
	const [storageInfoType, setStorageInfoType] = useState("");

	console.log({ storageInfoType });
	return (
		<AccessStyles>
			<div className="InfoList">
				<CardInfoStyles>
					{StorageUnitArr?.map((unit, i) => (
						<div className="Container" key={i}>
							<p>
								#{unit.unitNum} - {unit.availability}
							</p>
							<button onClick={() => setStorageInfo(unit)}>details</button>
						</div>
					))}
				</CardInfoStyles>

				<CardInfoStyles>
					{StorageUnitsTypesArr?.map((unitType, i) => (
						<div className="Container" key={i}>
							<p>{unitType.storageUnitType}</p>
							<button onClick={() => setStorageInfoType(unitType)}>
								details
							</button>
						</div>
					))}
				</CardInfoStyles>
			</div>

			<div>
				{storageInfo ? (
					<>
						<p>----------------</p>
						<h4>Stoage unit info</h4>
						<p>ID: {storageInfo.id}</p>
						<p>#{storageInfo.unitNum}</p>
						<p>${storageInfo.price / 100}</p>
						<p>{storageInfo.availability}</p>
						<p>{storageInfo.description}</p>
						<p>----------------</p>
					</>
				) : null}
				{storageInfoType ? (
					<>
						<h4>Stoage unit type info</h4>
						<p>ID: {storageInfoType.id}</p>
						<p>unit: {storageInfoType.storageUnitType}</p>
					</>
				) : null}
			</div>

			<div className="DataDisplay">
				<div className="forms">
					<CreateStorageUnit />
					<CreateStorageUnitTypes />
				</div>
			</div>
		</AccessStyles>
	);
}

export default StorageUnitAccess;
