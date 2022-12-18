import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import { SortPage } from "./SortPage";
import { useParticipantList } from "../state/hooks/useParticipantList";
import { useDrawerResult } from "../state/hooks/useDrawerResult";

jest.mock("../state/hooks/useParticipantList", () => {
	return {
		useParticipantList: jest.fn(),
	};
});

jest.mock("../state/hooks/useDrawerResult", () => {
	return {
		useDrawerResult: jest.fn(),
	};
});

describe("Sort page", () => {
	const participants = ["Guilherme", "Marjorie", "Bless"];

	const result = new Map([
		['Guilherme', 'Marjorie'],
		['Marjorie', "Bless"],
		['Bless', 'Guilherme']
	])


	beforeEach(() => {
		(useParticipantList as jest.Mock).mockReturnValue(participants);
		(useDrawerResult as jest.Mock).mockReturnValue(result);
	});

	test("All participants cant show your secret friend", () => {
		render(
			<RecoilRoot>
				<SortPage />
			</RecoilRoot>,
		);
		const options = screen.queryAllByRole("option");
		expect(options).toHaveLength(participants.length + 1);
	});


	test("friend secret is visible", () => {
		render(
			<RecoilRoot>
				<SortPage />
			</RecoilRoot>,
		);

		const select = screen.getByPlaceholderText("Selecione o seu nome")
		fireEvent.change(select, {
			target: {
				value: participants[0]
			}
		})
		
		const button = screen.getByRole("button")
		fireEvent.click(button)
		
		const friendSecret = screen.getByRole('alert');

		expect(friendSecret).toBeInTheDocument();

	})

	test("friend secret is not visible after 5 seconds", () => {
		jest.useFakeTimers();

		render(
			<RecoilRoot>
				<SortPage />
			</RecoilRoot>,
		);

		const select = screen.getByPlaceholderText("Selecione o seu nome")
		fireEvent.change(select, {
			target: {
				value: participants[1]
			}
		})

		const button = screen.getByRole("button")
		fireEvent.click(button)

		let friendSecret: HTMLElement | null = screen.getByRole('alert');
		expect(friendSecret).toBeInTheDocument();

		act(() => {
			jest.runAllTimers();
		})
		
		friendSecret = screen.queryByRole("alert");
		expect(friendSecret).not.toBeInTheDocument();
	})

});
