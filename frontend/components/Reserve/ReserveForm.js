import React, { useState } from "react";
import styled from "styled-components";
import useForm from "../../lib/useForm";
import { userRental } from "../../lib/RentalState";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useUser from "../auth/User";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const ADD_RENTAL_MUTATION = gql`
	mutation ADD_RENTAL_MUTATION(
		$paymentAmount: Int
		$rental: [StorageUnitTypeWhereUniqueInput]
		$day: String
		$month: String
		$year: String
		$name: String
		$id: ID!
	) {
		createRental(
			data: {
				paymentAmount: $paymentAmount
				rental: { connect: $rental }
				day: $day
				month: $month
				year: $year
				name: $name
				user: { connect: { id: $id } }
			}
		) {
			paymentAmount
		}
	}
`;

function ReserveForm() {
	const { rental, rentalPrice, unit, emptyCart } = userRental();
	const [startDate, setStartDate] = useState(new Date());
	const [month, setMonth] = useState("");
	const [day, setDay] = useState("");
	const [year, setYear] = useState("");
	const thisUser = useUser();
	const router = useRouter();
	const name = thisUser?.name;
	const id = thisUser?.id;
	const paymentAmount = rentalPrice.reduce((acc, item) => (acc += item), 0);

	const [createRental, { loading, error }] = useMutation(ADD_RENTAL_MUTATION, {
		variables: { paymentAmount, rental, day, month, year, name, id },
	});

	async function handleSubmit(e) {
		e.preventDefault();
		await createRental();

		router.push({
			pathname: "/thankyou",
		});

		setTimeout(() => {
			window.location.reload();
		}, 3000);
	}

	return (
		<FormStyle>
			<form onSubmit={handleSubmit}>
				<div className="date">
					<h4>Move in date:</h4>
					<DatePicker
						className="datePicker"
						selected={startDate}
						minDate={new Date()}
						onChange={(date) => {
							setStartDate(date);
							const pickedDate = date.toString().split(" ");
							setMonth(pickedDate[1]);
							setDay(pickedDate[2]);
							setYear(pickedDate[3]);
						}}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
			<div className="cart">
				<h2>Cart</h2>
				<p>-------------</p>
				<div className="cartItems">
					{unit.map((item) => (
						<div className="item">
							<h3>{item.unitType}</h3>
							<p>Unit # {item.unitNum}</p>
						</div>
					))}
				</div>
			</div>
		</FormStyle>
	);
}

export default ReserveForm;

const FormStyle = styled.div`
	/* border: solid red; */
	max-width: 1500px;

	form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.date {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.cart {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: max-content 1fr;
		justify-items: center;
		line-height: 1rem;
		margin-top: 2rem;
	}

	.cartItems {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}

	.item {
		border: solid 2px black;
		padding: 2rem 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--orange);
	}
`;
