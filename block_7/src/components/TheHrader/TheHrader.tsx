import styles from './TheHrader.module.scss';
import {ThemeSwitcher} from 'components/ThemeSwitcher'

export const TheHrader = () => (
  <div className={styles.header} data-testid="TheHrader">
    <div className={styles.logo}>devfinder</div>
    <ThemeSwitcher/>
  </div>
);
