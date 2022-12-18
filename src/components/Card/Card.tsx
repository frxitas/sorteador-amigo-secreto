import { FC } from "react";

import * as Styles from './Card.styles'

export const Card: FC = ({children}) => {
  return (
    <Styles.Card>
      {children}
    </Styles.Card>
  )
}