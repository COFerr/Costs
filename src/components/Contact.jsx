import styles from "./ProjectCard.module.css"
import ContactCard from "./ContactCard"
import Container from "./container/Container"

const Contact = () => {
    return (
        <div>
            <h1>Contato</h1>
            <Container customClass='contact_page'>
                <ContactCard name='Profile'
                    description='My Linkedin Profile'
                    goTo='https://www.linkedin.com/in/calebe-de-oliveira-ferreira'
                />
                <ContactCard name='Email'
                    description='My Personal Email'
                    goTo='mailto:calebe.oliveir@gmail.com?subject=Frontend Development&body=Ol%C3%A1%2C%20Vi%20o%20projeto%20costs%20que%20voc~e%20acompanhou%20em%20React%2C%20...'
                />
                <ContactCard name='Github'
                    description='My Github Profile'
                    goTo='https://www.github.com/COFerr'
                />
            </Container>
        </div>
    )
}

export default Contact