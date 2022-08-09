import React, { SetStateAction } from "react";
import type { NextPage } from 'next'
import styles from "/styles/GameList.module.css";
import Deep2 from '../interface/Deep2'

type TechTitleProps = {
    active1: number;
    active2: number;
    deep: number;
    deep2: Deep2;
}

const TechTitle: NextPage<TechTitleProps> = ({ active1 , active2 , deep, deep2}) => {
    return (
    <div className={styles.descriptContainer}>
        <img src={deep2[active1-1][active2-1].gameText} />
        {/* <p>{deep2[active1-1][active2].name}</p> */}
        <div className={styles.buttonContainer}>
        <a 
        className=
        {`${styles.playButton} ${
            (deep === 3 || deep === 4) ? styles.activePlayButton : ""
        }`}>자세히보기</a>
        </div>
    </div>
    );
};

export default TechTitle;