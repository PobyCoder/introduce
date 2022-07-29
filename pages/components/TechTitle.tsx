import React from "react";
import type { NextPage } from 'next'
import styles from "/styles/GameList.module.css";

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
            icon: "/es_icon.png",
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
            icon: "/clojure_icon.png",
            name: "Clojure",
            bg: "/clojure_bg.webp",
            game: true,
            gameText: "/clojure_disc.png",
            id: 1,
        },
        {
            icon: "/deno_icon.png",
            name: "Deno",
            bg: "/deno_bg.jpg",
            game: true,
            gameText: "/deno_disc.png",
            id: 2,
        },
        {
            icon: "/rust_icon.png",
            name: "Rust",
            bg: "/rust_bg.png",
            game: true,
            gameText: "/rust_disc.png",
            id: 3,
        },
        {
            icon: "/ruby_icon.png",
            name: "Ruby on Rails",
            bg: "/ruby_bg.jpg",
            game: true,
            gameText: "/ruby_disc.png",
            id: 4,
        },
        {
            icon: "/go_icon.png",
            name: "Go",
            bg: "/go_bg.jpg",
            game: true,
            gameText: "/go_disc.png",
            id: 5,
        },
        {
            icon: "/fastapi_icon.png",
            name: "Fast Api",
            bg: "/fastapi_bg.png",
            game: true,
            gameText: "/fastapi_disc.png",
            id: 6,
        },
    ],
];

type GameList = {
    active1: number;
    active2: number;
    deep: number;
}

const GameList: NextPage<GameList> = ({ active1 , active2 , deep}) => {
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

export default GameList;