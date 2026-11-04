import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

const EMPTY_ACCOUNT = { solde: '', dateCreation: '', type: 'COURANT' };

function AccountForm({ onAdded }) {
  // Etat du formulaire
  const [account, setAccount] = useState(EMPTY_ACCOUNT);

  // Mise a jour de l'etat a chaque modification d'un champ
  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  // Envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empeche le rechargement de la page
    axios.post(`${API_BASE_URL}/comptes`, account)
      .then(() => {
        alert('Compte ajouté');
        setAccount(EMPTY_ACCOUNT);
        if (onAdded) onAdded(); // Rafraichit la liste
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Solde</label>
          <input type="number" name="solde" className="form-control"
                 value={account.solde} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Date de Création</label>
          <input type="date" name="dateCreation" className="form-control"
                 value={account.dateCreation} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Type</label>
          <select name="type" className="form-select"
                  value={account.type} onChange={handleChange}>
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default AccountForm;
