import React from "react";

import {Sidebar} from "../components/Sidebar";
import {Header} from "../components/Header";
import * as S from './CommonLayout.styles'

export interface CommonLayoutProps {
  children: React.ReactNode
}

export const CommonLayout = ({children}: CommonLayoutProps): JSX.Element => {
  return (
    <S.Self>
      <Header title='My app'/>
      <S.Content>
      {children}
      </S.Content>
      <Sidebar />
    </S.Self>
  )
}