import { useState } from "react";

import { DefaultLayout } from "../Layout/DefaultLayout";

import * as Styles from "./SortPage.styles";

import { Select } from "../components/Select/Select";

import { useDrawerResult } from "../state/hooks/useDrawerResult";
import { useParticipantList } from "../state/hooks/useParticipantList";

export const SortPage = () => {
	const participants = useParticipantList();

	const result = useDrawerResult();
	const [participantDaVez, setParticipantDaVez] = useState("");
	const [secretFriend, setSecretFriend] = useState("");

	const drawer = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (result.has(participantDaVez)) {
			setSecretFriend(result.get(participantDaVez)!);
		}
	};

	return (
		<DefaultLayout>
			<Styles.Section>
				<Styles.Title>Quem vai tirar o papelzinho?</Styles.Title>
				<Styles.Form onSubmit={drawer}>
					<Select
						required={true}
						name="participantDaVez"
						id="participantDaVez"
						placeholder="Selecione o seu nome"
						value={participantDaVez}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
							setParticipantDaVez(e.target.value)
						}
					>
						<option>Selecione seu nome</option>
						{participants.map((participant) => (
							<option key={participant}>{participant}</option>
						))}
					</Select>

					<Styles.ButtonWrapper>
						<Styles.Button>Sortear</Styles.Button>
						<Styles.Description>
							Clique em sortear para ver quem é seu amigo secreto!
						</Styles.Description>
					</Styles.ButtonWrapper>
				</Styles.Form>
				<Styles.SecretFriend>
					{secretFriend && (
						<Styles.SecretFriendText role={"alert"}>
							{secretFriend}
						</Styles.SecretFriendText>
					)} 
				</Styles.SecretFriend>
			</Styles.Section>
		</DefaultLayout>
	);
};
