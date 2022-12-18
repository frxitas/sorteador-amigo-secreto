import { useRef, useState } from "react";
import { useAddParticipant } from "../../state/hooks/useAddParticipant";
import { useErrorMessage } from "../../state/hooks/useErrorMessage";

import * as Styles from "./Form.styles";

export const Form = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const [name, setName] = useState("");

	const addToList = useAddParticipant();

	const message = useErrorMessage();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addToList(name);
		setName("");
		inputRef.current?.focus();
	};

	return (
		<form onSubmit={handleSubmit}>
			<Styles.Group>
				<Styles.Input
					ref={inputRef}
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Insira o nome do participante"
				/>
				<Styles.Button disabled={!name}>Adicionar</Styles.Button>
			</Styles.Group>
			{message && (
				<Styles.ErrorMessage role="alert">{message}</Styles.ErrorMessage>
			)}
		</form>
	);
};
