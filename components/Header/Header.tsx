import React, { useState } from 'react';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';

const HeaderPage = styled.header`
  background-color: #e1e1e1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
`

type HeaderProps = {
  menu?: Array<string>;
  pesquisar?: string;
  name?: string;
}

export default function Header(props: HeaderProps) {
  const [userAuth, setUserAuth] = useState<boolean>(true);
  const [nameUser, setNameUser] = useState<string | undefined>(props.name);

  return (
  //  <header className={styles['menu-site']}> - utlizando CSS modules
    <HeaderPage>
      <div>Logotipo</div>
      <nav>
        <ul className={ css `
          width: 90%; 
          display: inline-flex; 
          margin: 0px; 
          padding: 20px;
          & > li {
            min-width: 100px;
            text-align: center;
            list-style: none;
          }`}>
          {props.menu ? props.menu.map(item => <li>{item}</li>) : []}
        </ul>
      </nav>
      {userAuth && (
        <div>
          <span>Seja bem-vindo {nameUser ? nameUser : "visitante"}</span>
        </div>)}
      <div>
        <Input type="text" placeholder="Pesquisar" /> 
        <Button>{props.pesquisar ? props.pesquisar : "Search"}</Button>
      </div>
    </HeaderPage>
  )
}
