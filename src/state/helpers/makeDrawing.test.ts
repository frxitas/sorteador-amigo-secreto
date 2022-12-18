import { makeDrawing } from "./makeDrawing";

describe("given to a secret friend", () => {
	test("each participant cannot take their own name", () => {
		const participants = [
			"Guilherme",
			"Marjorie",
			"Bless",
			"Ana Clara",
			"Alice",
		];

    const draw = makeDrawing(participants)
		participants.forEach(participant => {
			const secretFriend = draw.get(participant)
			expect(secretFriend).not.toEqual(participant)
		})
	});
});
