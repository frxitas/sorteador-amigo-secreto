import React, { ChangeEventHandler, forwardRef, ReactNode } from "react";

import * as Styles from "./Select.styles";

interface Props {
	children: ReactNode;
	required?: boolean;
	name?: string;
	id?: string;
	placeholder?: string;
	value?: string | number;
	onChange: ChangeEventHandler;
}

export const Select = forwardRef<HTMLSelectElement, Props>((props, ref) => {
	return (
		<Styles.Select
			name={props.name}
			id={props.id}
			value={props.value}
			placeholder={props.placeholder}
			required={props.required ? true : false}
			onChange={props.onChange}
			ref={ref}
		>
			{props.children}
		</Styles.Select>
	);
});
