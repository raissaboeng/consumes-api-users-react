import React from "react";
import { Li } from "./styled";

export default function PersonItem(props) {
  const user = props.user;

  return (
    <Li>
      <h3>{user.name}</h3>
      <div>
        <p>Nome de usuário: {user.username}</p>
        <p>Telefone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Empresa: {user.company.name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div>
        <p>Endereço</p>
        <p>Rua: {user.address.street}</p>
        <p>Complemento: {user.address.suite}</p>
        <p>Cidade: {user.address.city}</p>
        <p>Cep: {user.address.zipcode}</p>
      </div>

      <button type="button" onClick={() => props.deleteUser(user.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </Li>
  );
}
