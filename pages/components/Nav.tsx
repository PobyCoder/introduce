import type { NextPage } from 'next'
import styles from "/styles/Nav.module.css";
import Deep2 from '../interface/Deep2'

type NavProps = {
    deep2: Deep2;
    active1: number;
    active2: number;
    active3: number;
}

const Nav: NextPage<NavProps> = ({deep2, active1, active2, active3}) => {
    
    return (
        <div className={styles.nav}>
            <div className={styles.titleWrap}>
            {deep2[active1-1][active2-1].detail.map((obj) => (
                <div className={`${styles.title} ${
                    active3 === obj.id ? styles.active : ""
                }`}>
                    {obj.title}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Nav;