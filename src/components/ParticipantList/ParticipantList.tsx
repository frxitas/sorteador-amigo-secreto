import { useParticipantList } from "../../state/hooks/useParticipantList";

import * as Styles from "./ParticipantList.styles";

export const ParticipantList = () => {
	const participants: string[] = useParticipantList();

	return (
		<Styles.Wrapper>
			<Styles.List>
				{participants.map((participant) => (
					<Styles.ListItem key={participant}>{participant}</Styles.ListItem>
				))}
			</Styles.List>
		</Styles.Wrapper>
	);
};
