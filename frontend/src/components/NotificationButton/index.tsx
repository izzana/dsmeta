import icon from '../../assets/img/notification-icon.svg';//importando a imagem que quero usar

import './styles.css'; //importando arquivo css

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar"/>
        </div>
    )
  }
  
  export default NotificationButton;
  