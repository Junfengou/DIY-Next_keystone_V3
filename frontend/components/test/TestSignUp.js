import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const TestSignUp = () => (
	<div>
		<h1>Any place in your app!</h1>
		<Formik
			initialValues={{ email: "", password: "" }}
			validate={(values) => {
				const errors = {};
				const passwordRegex = /(?=.*[0-9])/;
				if (!values.email) {
					errors.email = "Email required";
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = "Invalid email address";
				}

				if (!values.password) {
					errors.password = "Password required";
				} else if (values.password.length < 8) {
					errors.password = "Password must be 8 characters long";
				} else if (!passwordRegex.test(values.password)) {
					errors.password =
						"Invalid password. Must contain one number, one lower case, and one uppercase, and one symbol.";
				}

				if (!values.name) {
					errors.email = "Name required";
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(false);
				console.log(values);
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<label>Email</label>
					<Field type="email" name="email" />
					<ErrorMessage name="email" component="div" />

					<label>Password</label>
					<Field type="password" name="password" />
					<ErrorMessage name="password" component="div" />

					<label>Name</label>
					<Field type="text" name="name" />
					<ErrorMessage name="name" component="div" />
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	</div>
);

export default TestSignUp;

/*
import React from "react";
import styled from "styled-components";
import useForm from "../../lib/useForm";
import Link from "next/link";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Error from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SIGNUP_MUTATION = gql`
	mutation SIGNUP_MUTATION(
		$username: String!
		$email: String!
		$password: String!
		$name: String!
		$address: String!
		$city: String!
		$state: String!
		$zipcode: Int!
		$country: String!
		$phone: String!
		$drlic: String!
	) {
		createUser(
			data: {
				username: $username
				email: $email
				password: $password
				name: $name
				address: $address
				city: $city
				state: $state
				zipcode: $zipcode
				country: $country
				phone: $phone
				drlic: $drlic
			}
		) {
			username
		}
	}
`;

function Signup() {
	const [createUser, { loading, data, error }] = useMutation(SIGNUP_MUTATION);

	async function handleSubmit(e) {
		e.preventDefault();

		await createUser().catch(console.error);
		resetForm();
	}

	return (
		<SignUpStyles>
			<div className="form">
				<h1>Any place in your app!</h1>
				<Formik
					initialValues={{ email: "", password: "" }}
					validate={(values) => {
						const errors = {};
						const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
						if (!values.email) {
							errors.email = "Email required";
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = "Invalid email address";
						}

						if (!values.password) {
							errors.password = "Password required";
						} else if (values.password.length < 8) {
							errors.password = "Password must be 8 characters long";
						} else if (!passwordRegex.test(values.password)) {
							errors.password =
								"Invalid password. Must contain one number, one lower case, and one uppercase, and one symbol.";
						}

						if (!values.name) {
							errors.email = "Name required";
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setSubmitting(false);
						console.log(values);
					}}
				>
					{({ isSubmitting }) => (
						<Form className="formula">

                            <label>Username</label>
							<Field type="text" name="username" />
							<ErrorMessage name="username" component="div" />

							<label>Email</label>
							<Field type="email" name="email" />
							<ErrorMessage name="email" component="div" />

							<label>Password</label>
							<Field type="password" name="password" />
							<ErrorMessage name="password" component="div" />


                            <label>Name</label>
							<Field type="text" name="name" />
							<ErrorMessage name="name" component="div" />

                            <label>Name</label>
							<Field type="text" name="name" />
							<ErrorMessage name="name" component="div" />

                            <label>Name</label>
							<Field type="text" name="name" />
							<ErrorMessage name="name" component="div" />

                            <label>Name</label>
							<Field type="text" name="name" />
							<ErrorMessage name="name" component="div" />

                            <label>Name</label>
							<Field type="text" name="name" />
							<ErrorMessage name="name" component="div" />

                            <label>Name</label>
							<Field type="text" name="name" />
							<ErrorMessage name="name" component="div" />

                            <label>Name</label>
							<Field type="text" name="name" />
							<ErrorMessage name="name" component="div" />

                            <label>Name</label>
							<Field type="text" name="name" />
							<ErrorMessage name="name" component="div" />


							<button type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</SignUpStyles>
	);
}

export default Signup;

const SignUpStyles = styled.div`
	display: flex;
	flex-direction: column;

	.formula {
		display: flex;
		flex-direction: column;
		border: solid red;
		justify-content: center;
		align-items: center;
		gap: 1.1rem;

		button {
			border: solid blue;
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;


*/
