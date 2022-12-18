import React from "react";
import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { ConfigPage } from "./ConfigPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
	return {
		useNavigate: () => mockNavigate,
	};
});

describe("config page", () => {
	test("correctly render", () => {
		const { container } = render(
			<RecoilRoot>
				<ConfigPage />
			</RecoilRoot>,
		);

    expect(container).toMatchSnapshot();
	});
});
