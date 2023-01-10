import styles from './UserCard.module.scss';
import {LocalGithubUser} from "../../types";
import {UserStat} from "../UserStat";

interface UserCardProps extends LocalGithubUser{

}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard} data-testid="UserCard">
    <UserStat repos={props.repos} followers={props.followers} following={props.following}/>
  </div>
);
