import logo from '../../assets/img/logo.svg';

import './styles.css'; //importando arquivo css

function Header() {
  return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta"/>
            <h1>DSMeta</h1>
            <p>
                Desenvolvido por 
                <a href="https://www.linkedin.com/in/izzana/" target="_blank" rel="noopener noreferrer">linkedin/izzana</a>
            </p>
        </div>
    </header>
  )
}

export default Header;
