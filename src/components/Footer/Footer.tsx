import { useParticipantList } from "../../state/hooks/useParticipantList";
import { useNavigate } from "react-router-dom";

import * as Styles from "./Footer.styles";
import { useDrawer } from "../../state/hooks/useDrawer";

export const Footer = () => {
	const participants = useParticipantList();

	const navigate = useNavigate();
	const drawer = useDrawer();

	const handleStart = () => {
		drawer();
		navigate("/sort");
	};

	return (
		<Styles.Footer>
			<Styles.Button disabled={participants.length < 3} onClick={handleStart}>
				start draw
			</Styles.Button>
		</Styles.Footer>
	);
};
