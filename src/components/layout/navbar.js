import { Link } from 'react-router-dom'

import styles from './navbar.module.css'

export function Navbar() {
    return (
        <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>   
        </nav>
    )
}