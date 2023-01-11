import styles from './TheHrader.module.scss';
import {ThemeSwitcher} from 'components/ThemeSwitcher'

export const TheHrader = () => (
  <div className={styles.header} >
    <div className={styles.logo}>Github user</div>
    <ThemeSwitcher/>
  </div>
);
