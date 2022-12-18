import shuffle from "just-shuffle";

export const makeDrawing = (participants: string[]) => {
	const totalParticipants = participants.length;

	const shuffledArray = shuffle(participants);

	const result = new Map<string, string>();

	for (let index = 0; index < totalParticipants; index++) {
		const friendIndex = index === totalParticipants - 1 ? 0 : index + 1;
		result.set(shuffledArray[index], shuffledArray[friendIndex]);
	}

	return result;
};
