import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import { Form } from "../Form/Form";

// Jest

describe("test Form.tsx", () => {
	test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
		render(
			<RecoilRoot>
				<Form />
			</RecoilRoot>,
		);

		// encontrar na DOM o input
		const input = screen.getByPlaceholderText("Insira o nome do participante");

		// encontrar o botão
		const button = screen.getByRole("button");

		// garantir que o input esteja no documento
		expect(input).toBeInTheDocument();

		// garantir que o botão esteja desabilitado
		expect(button).toBeDisabled();
	});

	test("add a participant if exist a name", () => {
		render(
			<RecoilRoot>
				<Form />
			</RecoilRoot>,
		);

		// encontrar na DOM o input
		const input = screen.getByPlaceholderText("Insira o nome do participante");

		// encontrar o botão
		const button = screen.getByRole("button");

		// insert a value to input
		fireEvent.change(input, {
			target: {
				value: "Guilherme",
			},
		});

		// click on button to submit
		fireEvent.click(button);

		// input focus active before submit
		expect(input).toHaveFocus();

		// input is empty before submit
		expect(input).toHaveValue("");
	});

	test("duplicated names", () => {
		render(
			<RecoilRoot>
				<Form />
			</RecoilRoot>,
		);

		const input = screen.getByPlaceholderText("Insira o nome do participante");

		const button = screen.getByRole("button");

		fireEvent.change(input, {
			target: {
				value: "Guilherme",
			},
		});

		fireEvent.click(button);

		fireEvent.change(input, {
			target: {
				value: "Guilherme",
			},
		});

		fireEvent.click(button);

		const message = screen.getByRole("alert");

		expect(message.textContent).toBe("duplicated name its not possible");
	});

	test("error message hidden before timer", () => {
		jest.useFakeTimers();

		render(
			<RecoilRoot>
				<Form />
			</RecoilRoot>,
		);

		const input = screen.getByPlaceholderText("Insira o nome do participante");

		const button = screen.getByRole("button");

		fireEvent.change(input, {
			target: {
				value: "Guilherme",
			},
		});

		fireEvent.click(button);

		fireEvent.change(input, {
			target: {
				value: "Guilherme",
			},
		});

		fireEvent.click(button);

		let message = screen.queryByRole("alert");
		expect(message).toBeInTheDocument();

		act(() => {
			jest.runAllTimers();
		});

		// wait N seconds
		message = screen.queryByRole("alert");
		expect(message).toBeNull();
	});
});
