import React, { ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled';

const ButtonData: React.FC<ButtonUnion> = styled.button`
  width: 100px;
  line-height: 30px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  margin-left: 10px;
  &:hover {
    background-color: #ddd;
  }
  &:disabled {
    cursor: not-allowed;
  }
`

type ButtonProps = {
    children: React.ReactNode
}

type ButtonUnion = ButtonProps | ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonUnion) {
  return (
    <ButtonData {...props}>{props.children}</ButtonData>
  )
}
