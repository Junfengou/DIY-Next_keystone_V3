import Link from "next/link";
import React from "react";
import styled from "styled-components";
import useUser from "../auth/User";

function Discount() {
	const user = useUser();
	return (
		<DiscountStyles>
			<div className="reserve">
				<h1>Reserve Your Own Storage Unit Today!</h1>
				{user && (
					<Link href="/storages">
						<button>Reserve</button>
					</Link>
				)}
				{!user && (
					<Link href="/signin">
						<button>Reserve</button>
					</Link>
				)}
			</div>
			<div className="info">
				<div className="size">
					<h1>size</h1>
					<p>5 x 10 --- $65 / Mo</p>
					<p>10 x 10 --- $75 / Mo</p>
					<p>10 x 15 --- $90 / Mo</p>
					<p>10 x 20 --- $110 / Mo</p>
					<p>10 x 30 --- $165 / Mo</p>
					<p>10 x 40 --- $204 / Mo</p>
				</div>

				<div className="discount">
					<p>
						<span>1/2 Off</span> First <span>2</span> Months 5x10, 10x10 And
						10x15 Units <br /> (<span>New Customers - 3mo. Min</span>)
					</p>
					<p>
						<span>Waived Application Fee</span> For A Commitment Of 6 Mo. Or
						More.
					</p>
					<p>
						<span>Prepay</span> Discounts Of 3% And 6% (6Mo./12Mo.){" "}
					</p>
					<p>
						First Responder And Active Duty Military{" "}
						<span>Discounts Of 5%</span>
					</p>
				</div>
			</div>
		</DiscountStyles>
	);
}

export default Discount;

const DiscountStyles = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
	/* padding: 5rem; */

	.reserve {
		/* margin-top: 12rem; */
		margin-top: 8rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			font-size: 1.8rem;
		}

		button {
			width: 12rem;
			height: 5rem;
			background: var(--orange);
		}
	}

	.info {
		display: flex;
		width: 80rem;
		justify-content: space-between;
		align-items: center;
		margin-top: 5rem;
	}

	.size {
		border-radius: 2rem;
		width: 33rem;
		height: 45rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: var(--orange);
		border: solid 2px black;
		/*
		 className="border-b-2 border-black"
		 */

		h1 {
			font-size: 1.5rem;
			text-transform: uppercase;
		}
	}

	.discount {
		border-radius: 2rem;
		width: 33rem;
		height: 45rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: var(--gray);
		color: white;
		gap: 2rem;
		padding: 3rem;

		span {
			color: var(--orange);
		}

		h1 {
			font-size: 2rem;
		}
	}

	@media (max-width: 900px) {
		.info {
			flex-direction: column;
			height: 60em;
			width: 25em;
		}

		.size {
			width: 30rem;
			height: 40rem;

			p {
				font-size: 1.4rem;
			}
		}

		.discount {
			padding: 5rem;
			width: 30rem;
			height: 40rem;
			gap: 1rem;

			p {
				font-size: 1.2rem;
			}
		}
	}

	@media (max-width: 400px) {
		height: 70em;

		.reserve {
			h1 {
				font-size: 1.6rem;
			}

			button {
				width: 10rem;
				height: 4rem;
				background: var(--orange);
				font-size: 1.2rem;
			}
		}

		.info {
			flex-direction: column;
			height: 53em;
			width: 25em;
		}

		.size {
			width: 25rem;
			height: 35rem;

			h1,
			p {
				font-size: 1.2rem;
			}
		}

		.discount {
			width: 25rem;
			height: 40rem;

			p {
				font-size: 1.2rem;
			}
		}
	}
`;
