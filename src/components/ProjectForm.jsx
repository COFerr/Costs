import styles from './ProjectForm.module.css'
import Input from './Input'
import Select from './Select'
import SubmitButton from './SubmitButton'
import { useState } from 'react'
import { useEffect } from 'react'

function ProjectForm({ handleSubmit, btntext, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => { setCategories(data) })
            .catch((err) => console.log(err))
    }, []
    )

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <div><Input type='text'
                name='name' text='nome do projeto'
                placeHolder='insira o nome do projeto'
                handleOnChange={handleChange}
                value={project.name ? project.name : ''} /></div>
            <div><Input type='number'
                name='budget'
                text='Orçamento do projeto'
                placeHolder='insira o orçamento do projeto'
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''} /></div>
            <Select name='category_id' txt='selecione a categoria'
                options={categories}
                handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />
            <SubmitButton text={btntext} />
        </form>
    )
}

export default ProjectForm