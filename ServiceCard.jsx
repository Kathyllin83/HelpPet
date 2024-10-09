import React from 'react';
import ButtonLink from './utils/ButtonLink.jsx';
import styles from './index.css'; // Importando corretamente os estilos

function ServiceCard({ title, onClick }) {
    return (
        <div className={styles.serviceCard}> {/* Correto: 'serviceCard' */}
            <h2>{title}</h2>
            <ButtonLink label="Entrar" onClick={onClick} />
        </div>
    );
}

export default ServiceCard;
