import {FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa'

import styles from './Footer.module.css'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.social_list_li}><FaFacebook/></li>
                <li className={styles.social_list_li}><FaInstagram/></li>
                <li className={styles.social_list_li}><FaLinkedin/></li>
            </ul>
            <p className={styles.copy_right}><span>costs</span> &copy; 2021</p>
        </footer>
    )
}

export default Footer