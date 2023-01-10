import styles from './ThemeSwitcher.module.scss';
import {ReactComponent as moonIcon} from 'assets/icon-moon.svg';
import {ReactComponent as sunIcon} from 'assets/icon-sun.svg';
import {useEffect, useState} from "react";


export const ThemeSwitcher = () => {

    const [isDark, setDark] = useState<boolean>(true);
    const themeText = isDark ? 'Light' : 'Dark';

    const Theme = isDark ? sunIcon : moonIcon;
    useEffect(()=>{
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    },[isDark])


    return (
        <div className={styles.switcher} onClick={()=>setDark(!isDark)}>
            <span style={{cursor:'pointer'}}>{themeText}</span>
            <Theme className={styles.icon} />
        </div>
    );
}

