import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Footer } from "./Footer";
import { useParticipantList } from "../../state/hooks/useParticipantList";

jest.mock("../../state/hooks/useParticipantList", () => {
	return {
		useParticipantList: jest.fn(),
	};
});

// NAVIGATE
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
	return {
		useNavigate: () => mockNavigate,
	};
});

// DRAWER
const mockDrawer = jest.fn();
jest.mock("../../state/hooks/useDrawer.ts", () => {
	return {
		useDrawer: () => mockDrawer,
	};
});

describe("not exists enough participants", () => {
	beforeEach(() => {
		(useParticipantList as jest.Mock).mockReturnValue([]);
	});

	test("the prank cannot be started", () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>,
		);

		const button = screen.getByRole("button");

		expect(button).toBeDisabled();
	});
});

describe("exists enough participants", () => {
	beforeEach(() => {
		(useParticipantList as jest.Mock).mockReturnValue([
			"Guilherme",
			"Marjorie",
			"Bless",
		]);
	});

	test("the prank can be started", () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>,
		);

		const button = screen.getByRole("button");

		expect(button).not.toBeDisabled();
	});

	test("the prank start", () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>,
		);

		const button = screen.getByRole("button");

		fireEvent.click(button);

		expect(mockNavigate).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith("/sort");
		expect(mockDrawer).toHaveBeenCalledTimes(1);
	});
});
