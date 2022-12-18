import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 330px);
	margin: 14px 0px;
	overflow-y: auto;

	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f0f0f0;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #c4c4c4;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #c4c4c4;
	}
`;

export const List = styled.ul`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	list-style: none;
	width: 98%;
	padding: 0px;
	gap: 4px;
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: left;
	align-items: center;
	width: 97%;
	height: 30px;
	background-color: white;
	border-radius: 4px;
	border-left: 4px solid #202627;
	padding: 0px 0px 0px 10px;
`;
