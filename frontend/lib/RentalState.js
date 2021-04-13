import { useState, useContext, createContext } from "react";

const LocalStateContext = createContext();

const LocalStateProvider = LocalStateContext.Provider;

function userRental() {
	const all = useContext(LocalStateContext);
	return all;
}

function RentalStateProvider({ children }) {
	const [rental, setRental] = useState([]);
	const [rentalPrice, setRentalPrice] = useState([]);
	const [unit, setUnit] = useState([]);

	// This function makes sure that there is no duplicates, verify by id
	function grabUnit(id, price, unitType, unitNum) {
		setRental([
			...[...rental, { id }]
				.reduce((map, obj) => map.set(obj.id, obj), new Map())
				.values(),
		]);
		setRentalPrice([...rentalPrice, price]);
		setUnit([
			...[...unit, { unitType, unitNum }]
				.reduce((map, obj) => map.set(obj.unitNum, obj), new Map())
				.values(),
		]);
	}

	function emptyCart() {
		setRental([]);
	}

	return (
		<LocalStateProvider
			value={{ rental, grabUnit, rentalPrice, unit, emptyCart }}
		>
			{children}
		</LocalStateProvider>
	);
}

export { RentalStateProvider, userRental };
