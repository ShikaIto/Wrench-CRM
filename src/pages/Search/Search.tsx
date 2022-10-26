import React, { ChangeEvent, FC, SyntheticEvent } from "react";
import styles from './Search.module.css';
import searchButton from '../../images/searchButton.svg';
import { getAddress } from '../../services/api';

type TData = {
    data: any,
    unrestricted_value: string,
    value: string
}

const Search: FC = () => {
    const [value, setValue] = React.useState('');
    const [data, setData] = React.useState<TData[] | undefined>(undefined)

    React.useEffect(() => {
        if (value.length >= 3) {
            getAddress(value)
                .then((res: any) => {
                    setData(res.suggestions);
                })
        }
    }, [value])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
    }

    const onClick = (str: string) => {
        setValue(str);
    }

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Поиск адресов</h1>
            <p className={styles.subtitle}>Введите интересующий вас адрес</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input}
                    onChange={onChange}
                    type='text'
                    value={value}
                    placeholder="Введите интересующий вас адрес" />
                <button className={styles.button} type='submit'>
                    <img src={searchButton} alt='иконка' className={styles.icon}></img>
                    <p className={styles.search}>Поиск</p>
                </button>
            </form>
            {data && <div className={styles.result}>
                <h3 className={styles.title}>Адреса</h3>
                <ul className={styles.list}>
                    {data.map((item, index) => {
                        return (
                            <li key={index} className={styles.text} onClick={() => { onClick(item.value) }}>
                                {item.value}
                            </li>
                        )
                    })}
                </ul>
            </div>}
        </section>
    )
}

export default Search;