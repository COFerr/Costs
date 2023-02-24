import styles from './ProjectCard.module.css'

function ContactCard({ name, description, goTo }) {

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <a href={goTo}>Ver</a>
            </div>
        </div>
    )
}

export default ContactCard