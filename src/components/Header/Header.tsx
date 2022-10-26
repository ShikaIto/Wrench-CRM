import { FC } from "react";
import logo from '../../images/logo.svg';
import user from '../../images/user.svg';
import styles from './Header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <a href="#" className={styles.box}>
                <img src={logo} alt='логотип' className={styles.logo}></img>
                <p className={styles.text}>Wrench CRM</p>
            </a>
            <a href="#" className={styles.box}>
                <img src={user} alt='иконка' className={styles.user}></img>
                <p className={styles.text}>Имя Фамилия</p>
            </a>
        </header>
    )
}

export default Header;