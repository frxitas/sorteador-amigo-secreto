import { useSetRecoilState, useRecoilValue } from "recoil";
import { errorState, listParticipantState } from "../atom";

export const useAddParticipant = () => {
	const setList = useSetRecoilState(listParticipantState);
	const list = useRecoilValue(listParticipantState);
	const setError = useSetRecoilState(errorState);

	return (participantName: string) => {
		if (list.includes(participantName)) {
			setError("duplicated name its not possible");
			setTimeout(() => {
				setError("");
			}, 5000);
			return;
		}
		return setList((currentList) => [...currentList, participantName]);
	};
};
