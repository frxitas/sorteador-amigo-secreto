import { useRecoilValue } from "recoil";
import { listParticipantState } from "../atom";

export const useParticipantList = () => {
	return useRecoilValue(listParticipantState);
};
