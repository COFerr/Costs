import styles from './Projects.module.css'
import ProjectForm from './ProjectForm'
import { Navigate, useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate()

    function createPost(project) {
        //initializa cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
            .then((data) => {
                navigate("/company", {state:{message:'Projeto Criado com Sucesso!'}})
            })
            .catch((err) => console.log(err))
    }



    return (
        <div className={styles.newProject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btntext='Criar Projeto' handleSubmit={createPost}/>
        </div>
    )
}

export default Projects