import { DefaultLayout } from "../Layout/DefaultLayout";

import { Footer } from "../components/Footer/Footer";
import { Form } from "../components/Form/Form";
import { ParticipantList } from "../components/ParticipantList/ParticipantList";

export const ConfigPage = () => {
	return (
		<DefaultLayout>
			<section>
				<h3>Vamos começar!</h3>
				<Form />
				<ParticipantList />
				<Footer />
			</section>
		</DefaultLayout>
	);
};
