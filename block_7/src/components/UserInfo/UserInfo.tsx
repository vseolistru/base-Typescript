import styles from './UserInfo.module.scss';
import style from 'components/InfoItem/InfoItem.module.scss'
import {LocalGithubUser} from "../../types";
import {InfoItem, InfoItemProps} from "../InfoItem";
import {ReactComponent as CompanyIcon} from 'assets/icon-company.svg'
import {ReactComponent as TwitterIcon} from 'assets/icon-twitter.svg'
import {ReactComponent as LocationIcon} from 'assets/icon-location.svg'
import {ReactComponent as BlogIcon} from 'assets/icon-website.svg'


interface UserInfoProps extends Pick<
    LocalGithubUser, 'company' | 'blog' | 'twitter' | 'location' >{}

export const UserInfo = ({ company, twitter, location, blog }: UserInfoProps) => {

    const items: Pick <InfoItemProps, 'icon' | 'text'>[] = [
        {
            icon: <LocationIcon/>,
            text: location,
        },
        {
            icon:<BlogIcon/>,
            text: blog
        },
        {
            icon:<TwitterIcon/>,
            text: twitter
        },
        {
            icon:<CompanyIcon/>,
            text: company
        }
    ]

    return  (
        <div className={styles.userInfo} >
            {
                items.map((item, idx) =>(
                    <InfoItem {...item} key={idx}/>
                ))
            }
        </div>
    );
}