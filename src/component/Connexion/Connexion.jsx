import React, { useState } from 'react';
import './Connexion.css'; 

const Connexion = () => {
  const [cin, setCin] = useState('');
  const [numero, setNumero] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  }

  return (
    <div className="connexion-container">
      <h2>Authentification</h2>
      <form onSubmit={handleLogin} className="connexion-form">
        <div className="form-group">
          <label htmlFor="email">CIN :</label>
          <input type="email" id="email" value={cin} onChange={(e) => setCin(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Numero electeur:</label>
          <input type="password" id="password" value={numero} onChange={(e) => setNumero(e.target.value)} required />
        </div>
        <button type="submit" className="btn-submit">S'authentifier</button>
      </form>
    </div>
  );
}

export default Connexion;
