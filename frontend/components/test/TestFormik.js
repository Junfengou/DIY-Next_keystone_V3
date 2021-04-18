import React, { useState } from "react";
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
			email
		}
	}
`;

function Signup() {
	const [currentState, setCurrentState] = useState({});
	const [createUser, { loading, data, error }] = useMutation(SIGNUP_MUTATION, {
		variables: currentState,
	});

	return (
		<SignUpStyles>
			<div className="form">
				<h1>Sign in form</h1>
				{data?.createUser && (
					<p>
						Signed up with {data.createUser.email} - Please go ahead and sign
						in!
					</p>
				)}
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
						setSubmitting(true);
						setCurrentState(values);
						createUser();
						console.log(values);
						setSubmitting(false);
					}}
				>
					{({ isSubmitting }) => (
						<Form className="formula">
							<label>Email</label>
							<Field type="email" name="email" className="field" />
							<ErrorMessage name="email" component="div" />

							<label>Password</label>
							<Field type="password" name="password" />
							<ErrorMessage name="password" component="div" />

							<label>Username</label>
							<Field type="text" name="username" />
							<ErrorMessage name="username" component="div" />

							<label>Name</label>
							<Field type="text" name="name" />
							<ErrorMessage name="name" component="div" />

							<label>Address</label>
							<Field type="text" name="address" />
							<ErrorMessage name="address" component="div" />

							<label>City</label>
							<Field type="text" name="city" />
							<ErrorMessage name="city" component="div" />

							<label>State</label>
							<Field type="text" name="state" />
							<ErrorMessage name="state" component="div" />

							<label>Zipcode</label>
							<Field type="number" name="zipcode" />
							<ErrorMessage name="zipcode" component="div" />

							<label>Country</label>
							<Field type="text" name="country" />
							<ErrorMessage name="country" component="div" />

							<label>Phone</label>
							<Field type="text" name="phone" />
							<ErrorMessage name="phone" component="div" />

							<label>Dr license</label>
							<Field type="text" name="drlic" />
							<ErrorMessage name="drlic" component="div" />

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
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: solid red;
	width: 100vw;

	.formula {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border: solid blue;
		padding: 5rem 0;
		gap: 1.1rem;

		.field {
			border-bottom: solid green;
			width: 60%;
		}

		button {
			border: solid blue;
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

/*
Old version:
import React from "react";
import styled from "styled-components";
import Form from "../styles/Form";
import useForm from "../../lib/useForm";
import Link from "next/link";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Error from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

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
	const { input, handleChange, resetForm } = useForm({
		username: "",
		email: "",
		password: "",
		name: "",
		address: "",
		city: "",
		state: "",
		zipcode: 0,
		phone: "",
		drlic: "",
	});

	const [createUser, { loading, data, error }] = useMutation(SIGNUP_MUTATION, {
		variables: input,
	});

	console.log(input);

	async function handleSubmit(e) {
		e.preventDefault();

		await createUser().catch(console.error);
		resetForm();
	}

	console.log({ input });
	return (
		<SignUpStyles>
			<div className="signupBubble">
				method="POST" prevent input from going into the browser history / url [security issue]
				<Form method="POST" onSubmit={handleSubmit}>
					<Error error={error} />
					<h1>Sign Up</h1>
					<fieldset disabled={loading}>
						<label>Username</label>
						<input
							type="text"
							name="username"
							placeholder="username"
							autoComplete="username"
							value={input.username}
							onChange={handleChange}
						/>

						<label>Email</label>
						<input
							type="email"
							name="email"
							placeholder="email"
							autoComplete="email"
							value={input.email}
							onChange={handleChange}
						/>

						<label>Password</label>
						<input
							type="password"
							name="password"
							placeholder="password"
							autoComplete="password"
							value={input.password}
							onChange={handleChange}
						/>

						<label>Name</label>
						<input
							type="text"
							name="name"
							placeholder="name"
							autoComplete="name"
							value={input.name}
							onChange={handleChange}
						/>

						<label>Address</label>
						<input
							type="text"
							name="address"
							placeholder="address"
							autoComplete="address"
							value={input.address}
							onChange={handleChange}
						/>

						<label>City</label>
						<input
							type="text"
							name="city"
							placeholder="city"
							autoComplete="city"
							value={input.city}
							onChange={handleChange}
						/>

						<label>State</label>
						<input
							type="text"
							name="state"
							placeholder="state"
							autoComplete="state"
							value={input.state}
							onChange={handleChange}
						/>

						<label>Zipcode</label>
						<input
							type="number"
							name="zipcode"
							placeholder="zipcode"
							value={input.zipcode}
							onChange={handleChange}
						/>

						<label>Country</label>
						<input
							type="text"
							name="country"
							placeholder="country"
							autoComplete="country"
							value={input.country}
							onChange={handleChange}
						/>

						<label>Phone</label>
						<input
							type="text"
							name="phone"
							placeholder="phone"
							autoComplete="phone"
							placeholder="(XXX) XXX-XXXX"
							value={input.phone}
							onChange={handleChange}
						/>

						<label>Dr License</label>
						<input
							type="text"
							name="drlic"
							placeholder="Driver's License"
							value={input.drlic}
							onChange={handleChange}
						/>

						<div className="btn">
							<button type="submit">Sign Up</button>
							<Link href="/signin">
								<button>Login</button>
							</Link>
						</div>
					</fieldset>
				</Form>
			</div>
		</SignUpStyles>
	);
}

export default Signup;

const SignUpStyles = styled.div`
	width: 45%;
	max-width: 900px;

	.signupBubble {
		margin: 6rem 3rem;
		border-radius: 1rem;
		background: white;
	}

	.btn {
		display: flex;
		gap: 2rem;
		padding: 2rem 0;
	}
`;


*/
