import React from "react";

import { GetCatsProps } from "../../../../common/app/App.actions";
import { CatCategoriesType } from "../../../../common/app/App.reducer";

import * as S from "./Sidebar.styles";

export interface SideBarProps {
  catsCategories?: CatCategoriesType;
  isVisible?: boolean;
  getCats: (p: GetCatsProps) => void;
  toggleSidebar: () => void;
  categoryId: number | null
}

export const Sidebar = ({
  catsCategories,
  isVisible,
  getCats,
  toggleSidebar,
  categoryId
}: SideBarProps): JSX.Element => {
  const handleClick = ({ limit, page, category_ids }: GetCatsProps) => {
    getCats({ limit: limit, page: page, category_ids: category_ids });
    toggleSidebar();
  };
  return (
    <S.Self isVisible={!!isVisible}>
      <S.Heading>Categories</S.Heading>
      <S.Content>
        <ul>
          {catsCategories &&
            catsCategories.map((el) => (
              <S.StyledListItem
                isSelected={categoryId === el.id}
                key={el.id}
                onClick={() =>
                  handleClick({ limit: 10, page: 1, category_ids: el.id })
                }
              >
                {el.name.toUpperCase()}
              </S.StyledListItem>
            ))}
        </ul>
      </S.Content>
    </S.Self>
  );
};
