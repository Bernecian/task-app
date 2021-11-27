import React, {useEffect} from "react";

import {CommonLayout} from "../../components/Layouts/CommonLayout/CommonLayout";
import {GetCatsProps} from "../../common/app/App.actions";
import {CatsDataType} from "../../common/app/App.reducer";

import {Button} from "../../components/UI/Button";
import * as S from './MainPage.styles'

export interface MainPageProps {
  getCats: (p: GetCatsProps) => void,
  getCategories: () => void,
  catsData: CatsDataType,
  catsLoading: boolean,
  category_ids: number | null
}
export const MainPage = ({getCats, getCategories, catsData, catsLoading, category_ids}: MainPageProps): JSX.Element => {
  useEffect(() => {
    getCategories()
  },[getCategories])

  const showMoreCats = () => {
    getCats({
      limit: 10,
      page: 1,
      category_ids: category_ids,
      isLoadMore: true
    })
  }

  return (
    <CommonLayout>
      <S.CatsContainer>
        {catsData && catsData.map(item => <S.CatWrapper src={item.url} key={item.id} alt={'cat'}/>)}
        {!catsData && <h3>Choose category</h3>}
      </S.CatsContainer>
      <Button disabled={catsLoading} onClick={() => showMoreCats()} title={'Show More !'}/>
    </CommonLayout>
  )
}