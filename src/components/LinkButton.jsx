import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

const LinkButton = ({to, link}) => {
    return(
        <Link to={to} className={styles.btn}>
            {link}
        </Link>
    )
}

export default LinkButton