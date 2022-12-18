import styled from "@emotion/styled";

export const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;

	/* @media screen and (max-width: 800px) {
		flex-direction: column;
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
	width: 100%;
	border: none;
	outline: none;
	transition: ease-in-out;

	&:hover {
		transition-duration: 125ms;
		box-shadow: 0px 0px 10px #dffbe3;
		cursor: pointer;
	}

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
