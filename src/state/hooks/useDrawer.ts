import { useSetRecoilState } from "recoil";
import { FriendSecretResult } from "../atom";
import { makeDrawing } from "../helpers/makeDrawing";
import { useParticipantList } from "./useParticipantList";

export const useDrawer = () => {
	const participants = useParticipantList();
	const setResult = useSetRecoilState(FriendSecretResult);

	return () => {
		const result = makeDrawing(participants)
		setResult(result);
	};
};
