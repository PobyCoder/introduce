import React from "react";
import type { NextPage } from 'next'
import styles from "/styles/GameList.module.css";

const sections = [
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
          bg: "/java_bg.png",
          game: true,
          gameText: "/java_disc.png",
          id: 2,
      },
      {
        icon: "/docker-compose_icon.jpg",
        name: "Docker Compose",
        game: true,
        gameText: "spring_disc.png",
        bg: "/spring_bg.png",
        id: 3,
      },
      {
        icon: "/linux_icon.png",
        name: "Linux",
        game: true,
        gameText: "node_disc.png",
        bg: "/node_bg.png",
        id: 4,
      },
      {
        icon: "/ubuntu_icon.png",
        name: "Ubuntu",
        game: true,
        gameText: "node_disc.png",
        bg: "/node_bg.png",
        id: 5,
      },
      {
        icon: "/centos_icon.jpg",
        name: "Centos",
        game: true,
        gameText: "node_disc.png",
        bg: "/node_bg.png",
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
  ],
  [
      {
          icon: "/react_icon.png",
          name: "React",
          bg: "/react_bg.png",
          game: true,
          gameText: "/react_disc.png",
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

type GameList = {
  active1: number;
  active2: number;
}

const GameList: NextPage<GameList> = ({ active1 , active2 }) => {
  return (
    <div className={styles.descriptContainer}>
      <img src={sections[active1-1][active2].gameText} />
      <p>{sections[active1-1][active2].name}</p>
      <div className={styles.buttonContainer}>
        <a className={styles.playButton}>자세히보기</a>
      </div>
    </div>
  );
};

export default GameList;