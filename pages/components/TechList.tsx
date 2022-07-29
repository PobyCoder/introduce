import React, { useState, useEffect } from "react";
import type { NextPage } from 'next'
import styles from "/styles/Tech.module.css";

type TechListeProps = {
    active1: number;
    deep: number;
    active2: number;
    transform: number;
};

const deep2 = [
    [
        {
            icon: "/kotlin_icon.png",
            name: "Kotlin",
            bg: "/kotlin_bg.png",
            game: true,
            gameText: "/kotlin_disc.png",
            id: 1,
        },
        {
            icon: "/java_icon.png",
            name: "Java",
            bg: "/java_bg.png",
            game: true,
            gameText: "/java_disc.png",
            id: 2,
        },
        {
            icon: "/spring_icon.jpg",
            name: "Spring Boot",
            game: true,
            gameText: "spring_disc.png",
            bg: "/spring_bg.png",
            id: 3,
        },
        {
            icon: "/node_icon.png",
            name: "Node",
            game: true,
            gameText: "node_disc.png",
            bg: "/node_bg.png",
            id: 4,
        },
        {
            icon: "/php_icon.jpg",
            name: "PHP",
            game: true,
            gameText: "php_disc.png",
            bg: "/php_bg.png",
            id: 5,
        },
    ],
    [
        {
            icon: "/aws_icon.jpg",
            name: "AWS",
            bg: "/aws_bg.jpg",
            game: true,
            gameText: "/aws_disc.png",
            id: 1,
        },
        {
            icon: "/docker_icon.png",
            name: "Docker",
            bg: "/docker_bg.png",
            game: true,
            gameText: "/docker_disc.png",
            id: 2,
        },
        {
            icon: "/docker-compose_icon.png",
            name: "Docker Compose",
            game: true,
            gameText: "docker-compose_disc.png",
            bg: "/docker-compose_bg.jpg",
            id: 3,
        },
        {
            icon: "/linux_icon.png",
            name: "Linux",
            game: true,
            gameText: "linux_disc.png",
            bg: "/linux_bg.png",
            id: 4,
        },
        {
            icon: "/ubuntu_icon.png",
            name: "Ubuntu",
            game: true,
            gameText: "ubuntu_disc.png",
            bg: "/ubuntu_bg.png",
            id: 5,
        },
        {
            icon: "/centos_icon.jpg",
            name: "Centos",
            game: true,
            gameText: "centos_disc.png",
            bg: "/centos_bg.png",
            id: 6,
        },
    ],
    [
        {
            icon: "/mysql_icon.png",
            name: "Mysql",
            bg: "/mysql_bg.jpg",
            game: true,
            gameText: "/mysql_disc.png",
            id: 1,
        },
        {
            icon: "/mongo_icon.png",
            name: "MongdoDB",
            bg: "/mongo_bg.png",
            game: true,
            gameText: "/mongo_disc.png",
            id: 2,
        },
        {
            icon: "/redis_icon.png",
            name: "Redis",
            game: true,
            gameText: "redis_disc.png",
            bg: "/redis_bg.png",
            id: 3,
        },
        {
            icon: "/es_icon.png",
            name: "Elastic Search",
            game: true,
            gameText: "es_disc.png",
            bg: "/es_bg.jpg",
            id: 4,
        },
    ],
    [
        {
            icon: "/ts_icon.png",
            name: "TypeScript",
            bg: "/ts_bg.jpg",
            game: true,
            gameText: "/ts_disc.png",
            id: 1,
        },
        {
            icon: "/react_icon.png",
            name: "React",
            bg: "/react_bg.png",
            game: true,
            gameText: "/react_disc.png",
            id: 2,
        },
        {
            icon: "/next_icon.png",
            name: "Next",
            bg: "/next_bg.jpg",
            game: true,
            gameText: "/next_disc.png",
            id: 3,
        },
        {
            icon: "/vue_icon.png",
            name: "Vue",
            bg: "/vue_bg.png",
            game: true,
            gameText: "/vue_disc.png",
            id: 4,
        },
    ],
    [
        {
            icon: "/kotlin_icon.png",
            name: "Kotlin",
            bg: "/kotlin_bg.png",
            game: true,
            gameText: "/kotlin_disc.png",
            id: 1,
        },
        {
            icon: "/java_icon.png",
            name: "Java",
            bg: "/java_bg.png",
            game: true,
            gameText: "/java_disc.png",
            id: 2,
        },
    ],
];

const TechList: NextPage<TechListeProps> = ({active1, deep, transform, active2}) => {
    return (
        <div
        className={styles.sections}
        style={(deep === 2 || deep === 3 ) ? {transform:`translateX(${transform}px)`} : {transform :"translateX(0px)"} }
        >
            {deep2[active1-1].map((sec: { id: string | number; icon: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <div
                key={`game_`+sec.id}
                className={`${styles.sect} ${
                    active2 === sec.id && (deep === 2 || deep === 3 ) ? styles.activeSect : ""
                }`}
                >
                    <div className={styles.iconWrap}>
                        <img src={sec.icon} />
                    </div>
                {active2 === sec.id && (deep === 2 || deep === 3 ) ? <p>{sec.name}</p> : ""}
                </div>
            ))}
        </div>
    )
}

export default TechList;
