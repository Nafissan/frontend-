import React, { useState } from 'react';
import './Connexion.css'; 
import { useNavigate , Link} from 'react-router-dom';

const Connexion = () => {
  const [cin, setCin] = useState('');
  const [numero, setNumero] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    navigate('/accueil');
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
        <Link to={'/accueil'}>        <button type="submit" className="btn-submit">S'authentifier</button>

        </Link>
        <div className="admin-login-link">
        <p>Connectez-vous en tant qu'administrateur :</p>
        <Link to="/admin/connexion">Connexion administrateur</Link>
      </div>
      </form>
    </div>
  );
}

export default Connexion;
