import styled from "styled-components/macro";
import {HeaderProps} from "./Header";

export const Self = styled.div`
  position: absolute;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1``

export const Burger = styled.div<Pick<HeaderProps, "isSidebarVisible">>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 20px;
  width: ${(p) => (p.isSidebarVisible ? "32px" : "30px")};
  height: 25px;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;
  > span {
    transition: all 0.3s ease;
    background: ${(p) => p.isSidebarVisible ? "#fff" : "#212121 "};;
    height: 2px;
    width: 100%;
    display: ${(p) => p.isSidebarVisible && "none"};
    transform-origin: left;
    :first-child {
      display: unset;
      transform: ${(p) => p.isSidebarVisible && "rotate(45deg)"};
    }
    :last-child {
      display: unset;
      transform: ${(p) => p.isSidebarVisible && "rotate(-45deg)"};
    }
  }
`;
