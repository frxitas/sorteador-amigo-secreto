import { atom } from "recoil";

export const listParticipantState = atom<string[]>({
	key: "listParticipantState",
	default: [],
});

export const FriendSecretResult = atom<Map<string, string>>({
	key: 'FriendSecretResult',
	default: new Map()
})

export const errorState = atom<string>({
	key: "errorState",
	default: "",
});