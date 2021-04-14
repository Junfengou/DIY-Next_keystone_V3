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
	const [cartOpen, setCartOpen] = useState(false);
	const [click, setClick] = useState(false);

	function openMobileMenu() {
		setClick(!click);
	}

	function closeMobileMenu() {
		setClick(false);
	}

	// This function makes sure that there is no duplicates, verify by id
	function grabUnit(id, price, unitType, unitNum) {
		setRental([
			...[...rental, { id }]
				.reduce((map, obj) => map.set(obj.id, obj), new Map())
				.values(),
		]);
		// setRentalPrice([...rentalPrice, price]);
		setRentalPrice([
			...[...rentalPrice, { id, price }]
				.reduce((map, obj) => map.set(obj.id, obj), new Map())
				.values(),
		]);
		setUnit([
			...[...unit, { id, unitType, unitNum, price }]
				.reduce((map, obj) => map.set(obj.unitNum, obj), new Map())
				.values(),
		]);
	}

	function deleteUnit(id) {
		filterItem(setRental, rental, id);
		filterItem(setRentalPrice, rentalPrice, id);
		filterItem(setUnit, unit, id);
		// setRental(
		// 	rental.filter((item) => {
		// 		return item.id != id;
		// 	})
		// );
		// setRentalPrice(
		// 	rentalPrice.filter((item) => {
		// 		return item.id != id;
		// 	})
		// );
		// setUnit(
		// 	unit.filter((item) => {
		// 		return item.id != id;
		// 	})
		// );
	}

	function filterItem(setLoopyLoop, loopyArr, id) {
		setLoopyLoop(
			loopyArr.filter((item) => {
				return item.id != id;
			})
		);
	}

	function toggleCart() {
		setCartOpen(!cartOpen);
		console.log("hmm");
	}

	function closeCart() {
		setCartOpen(false);
	}

	function emptyCart() {
		setRental([]);
	}

	return (
		<LocalStateProvider
			value={{
				rental,
				grabUnit,
				rentalPrice,
				unit,
				emptyCart,
				toggleCart,
				closeCart,
				cartOpen,
				deleteUnit,
				click,
				openMobileMenu,
				closeMobileMenu,
			}}
		>
			{children}
		</LocalStateProvider>
	);
}

export { RentalStateProvider, userRental };
