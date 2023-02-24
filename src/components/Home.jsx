import styles from './Home.module.css'
import savings from '../assets/savings.svg'
import LinkButton from './LinkButton'

const Home = () => {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo.</p>
            <LinkButton to='/projects' link='Criar Projeto'/>
            <img src={savings} alt='costs'/>
        </section>
    )
}

export default Home