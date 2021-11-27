import styled from "styled-components/macro";
import { SideBarProps } from "./Sidebar";

export const Self = styled.div<Pick<SideBarProps, "isVisible">>`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100%;
  background: #212121;
  left: ${(p) => (p.isVisible ? "0" : "-200px")};
  transition: left 0.3s ease-in-out;
  @media (min-width: 768px) {
    width: 200px;
  }
`;
export const Heading = styled.h2`
  margin-top: 100px;
  font-size: 25px;
  color: #fff;
`;
export const Content = styled.div`
  margin-top: 25px;
  background: #21212150;
  height: 100%;
  > ul {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const StyledListItem = styled.li<{ isSelected: boolean }>`
  color: ${p => p.isSelected ? 'cyan' : '#fff'};
`