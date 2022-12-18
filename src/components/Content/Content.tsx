import React, { ReactNode } from "react";

import * as Styles from "./Content.styles";

interface ContentProps {
	children: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
	return <Styles.Content>{children}</Styles.Content>;
};
