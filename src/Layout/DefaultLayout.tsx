import React, { ReactNode } from "react";

import { Card } from "../components/Card/Card";
import { Content } from "../components/Content/Content";
import { Header } from "../components/Header/Header";

interface IDefaultLayout {
	children: ReactNode;
}

export const DefaultLayout = ({ children }: IDefaultLayout) => {
	return (
		<Content>
			<Header />
			<Card>{children}</Card>
		</Content>
	);
};
