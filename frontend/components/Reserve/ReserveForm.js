import React, { useState } from "react";
import styled from "styled-components";
import useForm from "../../lib/useForm";
import Form from "../styles/Form";
import { userRental } from "../../lib/RentalState";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useUser from "../auth/User";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

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
	const { rental, rentalPrice } = userRental();
	const [startDate, setStartDate] = useState(new Date());
	const [month, setMonth] = useState("");
	const [day, setDay] = useState("");
	const [year, setYear] = useState("");
	const thisUser = useUser();
	const name = thisUser.name;
	const id = thisUser.id;
	const paymentAmount = 0;
	console.log(rentalPrice);

	const [createRental, { loading, error }] = useMutation(ADD_RENTAL_MUTATION, {
		variables: { paymentAmount, rental, day, month, year, name, id },
	});

	async function handleSubmit(e) {
		e.preventDefault();
		await createRental();
	}

	return (
		<FormStyle>
			<Form onSubmit={handleSubmit}>
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
					<button type="submit">Submit</button>
				</div>
			</Form>
		</FormStyle>
	);
}

export default ReserveForm;

const FormStyle = styled.div`
	/* border: solid red; */
	max-width: 1500px;
`;
