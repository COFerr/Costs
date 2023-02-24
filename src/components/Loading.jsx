import loading from '../assets/loading.svg'

import styles from './Loading.module.css'

function Loading(){
    return(
        <div className={styles.loader_contatiner}>
            <img className={styles.loader} src={loading} alt='Loading'/>
        </div>
    )
}

export default Loading