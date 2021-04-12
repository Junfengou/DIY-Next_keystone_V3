import { useState, useContext, createContext } from "react";

const LocalStateContext = createContext();

const LocalStateProvider = LocalStateContext.Provider;

function userRental() {
	const all = useContext(LocalStateContext);
	return all;
}

function RentalStateProvider({ children }) {
	const [rental, setRental] = useState([]);

	function grabUnit(id, price) {
		setRental(() => [{ id }, ...rental]);
	}

	return (
		<LocalStateProvider value={{ rental, grabUnit, rentalPrice }}>
			{children}
		</LocalStateProvider>
	);
}

export { RentalStateProvider, userRental };
