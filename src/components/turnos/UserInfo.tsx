import React from 'react';
import { UserData } from './types';

interface UserInfoProps {
  userData: UserData;
}

const UserInfo: React.FC<UserInfoProps> = ({ userData }) => {
  return (
    <div>
      <h2>Información del Usuario:</h2>
      <p>Nombre: {userData.nombre}</p>
      <p>DNI: {userData.dni}</p>
      <p>Numero de Celular: {userData.numeroCelular}</p>
      <p>Email: {userData.email}</p>
      <br />
    </div>
  );
};

export default UserInfo;
