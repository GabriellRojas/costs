import styles from './Home.module.css'

import { LinkButton } from '../layout/LinkButton'

import mainImg from '../../img/main_img.png'

export function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Gerencie seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar projeto" />
            <img src={mainImg} />
        </section>
    )
}