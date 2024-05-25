import React, { useState } from 'react';
import './Connexion.css'; 
import { useNavigate , Link} from 'react-router-dom';

const Connexion = () => {
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    navigate('/accueil');
    e.preventDefault();
  }

  return (
    <div className="connexion-container">
      <h2>Authentification Administrateur</h2>
      <form onSubmit={handleLogin} className="connexion-form">
        <div className="form-group">
          <label htmlFor="email">Login :</label>
          <input type="email" id="email" value={login} onChange={(e) => setlogin(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input type="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)} required />
        </div>
        <Link to={'/admin'}>        <button type="submit" className="btn-submit">S'authentifier</button>

        </Link>
        <Link to="/">Retour</Link>
      </form>
    </div>
  );
}

export default Connexion;
