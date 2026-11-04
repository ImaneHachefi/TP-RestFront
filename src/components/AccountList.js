import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function AccountList({ refreshKey }) {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);

  // Chargement de la liste au montage, et a chaque ajout (refreshKey change)
  useEffect(() => {
    axios.get(`${API_BASE_URL}/comptes`, { headers: { Accept: 'application/json' } })
      .then(response => {
        setAccounts(response.data);
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setError("Impossible de charger les comptes. Le backend est-il démarré ?");
      });
  }, [refreshKey]);

  return (
    <div className="container mt-4">
      <h2>Liste des Comptes</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Solde</th>
            <th>Date de Création</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(account => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.solde}</td>
              <td>{account.dateCreation ? String(account.dateCreation).slice(0, 10) : ''}</td>
              <td>{account.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccountList;
