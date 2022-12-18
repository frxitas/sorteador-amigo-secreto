import React from "react";
import { RecoilRoot } from "recoil";
import { render, screen } from "@testing-library/react";
import { ParticipantList } from "./ParticipantList";
import { useParticipantList } from "../../state/hooks/useParticipantList";

jest.mock("../../state/hooks/useParticipantList", () => {
	return {
		useParticipantList: jest.fn(),
	};
});

describe("a empty participant list", () => {
	beforeEach(() => {
		(useParticipantList as jest.Mock).mockReturnValue([]);
	});

	test("render with not elements", () => {
		render(
			<RecoilRoot>
				<ParticipantList />
			</RecoilRoot>,
		);

		const items = screen.queryAllByAltText("listitem");

		expect(items).toHaveLength(0);
	});
});

describe("a filled participant list", () => {
	const participants = ["Guilherme", "Marjorie"];
	beforeEach(() => {
		(useParticipantList as jest.Mock).mockReturnValue(participants);
	});

	test("render with not elements", () => {
		render(
			<RecoilRoot>
				<ParticipantList />
			</RecoilRoot>,
		);

		const items = screen.queryAllByRole("listitem");

		expect(items).toHaveLength(participants.length);
	});
});
