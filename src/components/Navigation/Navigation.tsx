import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../images/home.svg';
import search from '../../images/search.svg';
import tables from '../../images/tables.svg';
import calendar from '../../images/calendar.svg';
import maps from '../../images/maps.svg';
import widgets from '../../images/widgets.svg';
import settings from '../../images/settings.svg';
import profile from '../../images/profile.svg';
import finance from '../../images/finance.svg';
import exit from '../../images/exit.svg';
import hide from '../../images/hide.svg';
import styles from './Navigation.module.css';

const Navigation: FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <nav className={styles.container}>
            <p className={styles.title}>Меню</p>
            <NavLink end to='/' className={({ isActive }) => isActive ? styles.active : styles.link}>
                <img src={home} alt='иконка'></img>
                <p className={styles.text}>Главная</p>
            </NavLink>
            <NavLink to='/address' className={({ isActive }) => isActive ? styles.active : styles.link}>
                <img src={search} alt='иконка'></img>
                <p className={styles.text}>Поиск адресов</p>
            </NavLink>
            <a href='#' className={styles.link}>
                <img src={tables} alt='иконка'></img>
                <p className={styles.text}>Таблицы</p>
            </a>
            <a href='#' className={styles.link}>
                <img src={calendar} alt='иконка'></img>
                <p className={styles.text}>Календарь</p>
            </a>
            <a href='#' className={styles.link}>
                <img src={maps} alt='иконка'></img>
                <p className={styles.text}>Карты</p>
            </a>
            <a href='#' className={styles.link}>
                <img src={widgets} alt='иконка'></img>
                <p className={styles.text}>Виджеты</p>
            </a>
            <div className={styles.box}>
                <a href='#' className={styles.link}>
                    <img src={settings} alt='иконка'></img>
                    <p className={styles.text}>Настройки</p>
                </a>
                <img src={hide}
                    alt='иконка'
                    className={`${open ? styles.open : styles.close}`}
                    onClick={handleClick}></img>
            </div>
            {open && <>
                <a href='#' className={`${styles.link} ${styles.hidden}`}>
                    <img src={profile} alt='иконка'></img>
                    <p className={styles.text}>Настройки профиля</p>
                </a>
                <a href='#' className={`${styles.link} ${styles.hidden}`}>
                    <img src={finance} alt='иконка'></img>
                    <p className={styles.text}>Управление финансами</p>
                </a>
            </>}
            <a href='#' className={styles.link}>
                <img src={exit} alt='иконка'></img>
                <p className={styles.text}>Выход</p>
            </a>
        </nav>
    )
}

export default Navigation;