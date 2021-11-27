import styled from "styled-components/macro";
import {ButtonProps} from "./Button";

export const Self = styled.button<Partial<ButtonProps>>`
  width: 150px;
  color: #fff;
  background: ${p => p.disabled ? '#636363' : '#212121'};
  border: none;
  height: 80px;
  border-radius: 3px;
  cursor: pointer;
`