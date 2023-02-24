import styles from './ProjectForm.module.css'
import { useState } from 'react'
import Input from './Input'
import SubmitButton from './SubmitButton'

function ServiceForm({handleSubmit, btnText, projectData}){

    const [service, setService] = useState({})
    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({...service, [e.target.name] : e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type='text'
            text='Nome do serviço'
            name='name'
            placeHolder='Insira o nome do serviço'
            handleOnChange={handleChange}
            />
            <Input 
            type='number'
            text='Custo do serviço'
            name='cost'
            placeHolder='Insira o custo do serviço'
            handleOnChange={handleChange}
            />
            <Input 
            type='text'
            text='descrição do serviço'
            name='description'
            placeHolder='Descreva o serviço'
            handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ServiceForm