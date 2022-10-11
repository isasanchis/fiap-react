import React from 'react'
import Header from '../components/Header';

export default function LoginPage() {
  return (
    <>
      <Header menu={["Home", "Produtos", "Serviços", "Contato"]} pesquisar="Buscar" name="Isabella" />
      <h1>Bem-vindo ao nosso Banco</h1>
    </>
  )
}
