import styled from "@emotion/styled";

export const Group = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	width: 100%;
	gap: 12px;
`;

export const Input = styled.input`
	display: flex;
	align-items: center;
	background-color: white;
	color: black;
	border: 2px solid #dffbe3;
	width: 350px;
	height: 38px;
	padding: 0 10px;
	outline: none;
	border-radius: 5px;
	font-size: 14px;

	:focus-visible {
		border: 2px solid #202627;
	}

	/* @media screen and (max-width: 800px) {
		display: block;
		width: 100%;
		border-radius: 45px;
		box-shadow: 0px 2px 0px 1px #000000;
		margin-bottom: 18px;
	} */
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #202627;
	color: white;
	border-radius: 4px;
	height: 40px;
	width: 100px;
	border: none;
	outline: none;
	transition: ease-in-out;

	&:hover {
		transition-duration: 125ms;
		box-shadow: 0px 0px 10px #dffbe3;
		cursor: pointer;
	}

	/* :hover {
		opacity: 0.8;
	} */

	:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* @media screen and (max-width: 800px) {
		display: block;
		margin-top: 16px;
		margin: 0 auto;
		width: 220px;
		border-radius: 45px;
	} */
`;

export const ErrorMessage = styled.p`
	color: #842029;
	background-color: #f8d7da;
	padding: 16px;
	border: 1px solid #f5c2c7;
	border-radius: 8px;

	@media screen and (max-width: 800px) {
		margin: 48px 0;
	}
`;
