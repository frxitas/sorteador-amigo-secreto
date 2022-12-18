import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 30px 0px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 6px;
`

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
`;

export const Description = styled.p`
  margin: 0px;
  font-size: 14px;
`

export const SecretFriend = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: #be4975;
  border-radius: 4px;
` 

export const SecretFriendText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: white;
`