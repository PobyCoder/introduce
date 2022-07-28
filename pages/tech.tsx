import React, { useState, useEffect } from "react";
import type { NextPage } from 'next'
import styles from "/styles/Tech.module.css";
import TechTitle from './components/TechTitle'
import TechList from './components/TechList'
import Controller from './components/Controller'
import Clock from './components/Clock'
import { useRouter } from 'next/router'


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
            bg: "/java_bg.jpg",
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

const deep1 = [
    {
        title: "Backend",
        id: 1,
    },
    {
        title: "Sever",
        id: 2,
    },
    {
        title: "DataBase",
        id: 3,
    },
    {
        title: "Frontend",
        id: 4,
    },
    {
        title: "Basic",
        id: 5,
    },
    
]


const Tech: NextPage = () => {
    const router = useRouter()
    let [deep, setDeep] = useState(1)
    const [bg, setBg] = useState("/kotlin_bg.png");
    let min1 = deep1[0].id
    let max1 = deep1[deep1.length - 1].id
    let [active1, setActive1] = useState(1)
    let [active2, setActive2] = useState(0)

    useEffect(() => {
    const listener = (e: KeyboardEvent) => {
        if (e.code === "KeyA" || e.code === "ArrowLeft") {
            switch(deep) {
                case 1 :
                    if (active1 > min1) {
                        setActive1(--active1)
                    }
                    break
            }
        }  else if (e.code === "KeyD" || e.code === "ArrowRight") {
            console.log(deep)
            switch(deep) {
                case 1 :
                    if (active1 < max1) {
                        setActive1(++active1)
                    }
                    break
            }
        } else if (e.code === "Enter") {
            switch(deep) {
                case 1 :
                    setDeep(++deep)
                    setActive2(1)
                    break
            }
        } else if (e.code === "Backspace") {
            switch(deep) {
                case 1 :
                    router.push("/")
                    break
            }
        }
    };
    document.addEventListener("keydown", listener);
    return () => {
        document.removeEventListener("keydown", listener);
    };
    }, []);
    return (
        <div className={styles.mainContainerWrap} style={{ backgroundImage: `url(${bg})` }}>
            <div className={styles.mainContainer}>
                <div className={styles.mainHeader}>
                <div className={styles.gamesMedia}>
                    {deep1.map((sec) => (
                        <p
                         key={`deep1_`+sec.id}
                         className={`${styles.deep1} ${
                            active1 === sec.id ? styles.activeDeep1 : ""
                        }`}
                         >{sec.title}</p>
                    ))}
                </div>
                <div className={styles.iconsContainer}>
                    <div className={styles.profileIcon}>
                    <img src={"/profile.jpg"} />
                    <div className={styles.onlineSymbol}></div>
                    </div>
                    <Clock />
                </div>
                </div>
                <TechList 
                active1={active1} 
                deep={deep}
                setBg={setBg}
                active2={active2}
                setActive2={setActive2}
                />
                <TechTitle 
                active1={active1} 
                active2={active2} 
                />
                <Controller />
            </div>
        </div>
    )
}

export default Tech;
