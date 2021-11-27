import React from "react";

import * as S from './Header.styles'

export interface HeaderProps {
  title?: string;
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}
export const Header = ({title, isSidebarVisible, toggleSidebar}: HeaderProps): JSX.Element => {
  return (
    <S.Self>
      <S.Burger isSidebarVisible={isSidebarVisible} onClick={() => toggleSidebar()}>
        <span />
        <span />
        <span />
      </S.Burger>
      <S.Title>{title}</S.Title>
    </S.Self>
  )
}