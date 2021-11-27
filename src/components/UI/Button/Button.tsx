import React from "react";

import * as S from './Button.styles'

export interface ButtonProps {
  title?: string,
  onClick?: () => void,
  disabled?: boolean
}

export const Button = ({title, onClick, disabled}: ButtonProps): JSX.Element => {
  return (
    <S.Self onClick={onClick} disabled={disabled}>{title}</S.Self>
  )
}