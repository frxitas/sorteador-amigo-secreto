import styled from "@emotion/styled";

export const Select = styled.select`
	display: flex;
	align-items: center;
	background-color: white;
	color: black;
	border: 2px solid #dffbe3;
	width: 100%;
	height: 38px;
	padding: 0 10px;
	outline: none;
	border-radius: 5px;
	font-size: 14px;

	:focus-visible {
		border: 2px solid #202627;
	}
`;
