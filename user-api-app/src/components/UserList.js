import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des utilisateurs :', error);
      });
  }, []);

  return (
    <div className="user-container">
      <h1>👥 Liste des utilisateurs</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Email :</strong> {user.email}</p>
            <p><strong>Téléphone :</strong> {user.phone}</p>
            <p><strong>Entreprise :</strong> {user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
