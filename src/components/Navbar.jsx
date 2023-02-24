import { Link } from "react-router-dom"
import Container from "./container/Container"
import styles from './Navbar.module.css'
import Logo from "../assets/costs_logo.png"
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={Logo} alt='costs'/>
                </Link>
                <ul className={styles['list']}>
                    <li className={styles.item}><Link to='/'>HOME</Link></li>
                    <li className={styles.item}><Link to='/company'>EMPRESA</Link></li>
                    <li className={styles.item}><Link to='/projects'>NOVO PROJETO</Link></li>
                    <li className={styles.item}><Link to='/contact'>CONTATO</Link></li>
                </ul>
            </Container>            
        </nav>
    )
}

export default Navbar