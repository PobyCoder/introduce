import React, { useState, useEffect, SetStateAction } from "react";
import type { NextPage } from 'next'
import styles from "/styles/Tech.module.css";
import Deep2 from '../interface/Deep2'

type TechListeProps = {
    deep2: Deep2;
    active1: number;
    deep: number;
    active2: number;
    transform: number;
};


const TechList: NextPage<TechListeProps> = ({active1, deep, transform, active2, deep2}) => {
    return (
        <div
        className={styles.sections}
        style={(deep === 2 || deep === 3 || deep === 4) ? {transform:`translateX(${transform}px)`} : {transform :"translateX(0px)"} }
        >
            {deep2[active1-1].map((sec) => (
                <div
                key={`game_`+sec.id}
                className={`${styles.sect} ${
                    active2 === sec.id && (deep === 2 || deep === 3 || deep === 4) ? styles.activeSect : ""
                }`}
                >
                    <div className={styles.iconWrap}>
                        <img src={sec.icon} />
                    </div>
                {active2 === sec.id && (deep === 2 || deep === 3 || deep === 4) ? <p>{sec.name}</p> : ""}
                </div>
            ))}
        </div>
    )
}

export default TechList;
