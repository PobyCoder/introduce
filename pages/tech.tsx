import React, { useState, useEffect } from "react";
import type { NextPage } from 'next'
import styles from "/styles/Tech.module.css";
import TechTitle from './components/TechTitle'
import TechList from './components/TechList'
import Controller from './components/Controller'
import Clock from './components/Clock'
import { useRouter } from 'next/router'
import { Drawer } from "@material-ui/core";

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
            bg: "/go_bg.png",
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


const Tech: NextPage = () => {
    const router = useRouter()
    let [deep, setDeep] = useState(1)
    let min1 = deep1[0].id
    let max1 = deep1[deep1.length - 1].id
    let [active1, setActive1] = useState(1)
    let [active2, setActive2] = useState(1)
    let [bg, setBg] = useState("");
    const [open, setOpen] = useState(false);
    const listItems = [
        {
            listText: "Home"
        },
        {
            listText: "Resume"
        },
        {
            listText: "Portfolio"
        },
        {
            listText: "Contacts"
        }
    ];

    let min2 = deep2[active1-1][0].id
    let max2 = deep2[active1-1][deep2[active1-1].length - 1].id
    const [transform, setTransform] = useState(0)

    useEffect(() => {
    const listener = (e: KeyboardEvent) => {
        if (e.code === "KeyW" || e.code === "ArrowUp") {
            switch(deep) {
                case 1 :
                    break
                case 2 :
                    setDeep(--deep)
                    setActive2(active2=1)
                    break
                case 3:
                    setDeep(--deep)
                    break;
            }
        } else if (e.code === "KeyA" || e.code === "ArrowLeft") {
            switch(deep) {
                case 1 :
                    if (active1 > min1) {
                        setActive1(--active1)
                    }
                    break
                case 2 :
                    if (active2 > min2) {
                        setActive2(--active2)
                    }
                    break
                case 3:
                    break;
            }
        } else if (e.code === "KeyS" || e.code === "ArrowDown") {
            switch(deep) {
                case 1 :
                    setDeep(++deep)
                    min2 = deep2[active1-1][0].id
                    max2 = deep2[active1-1][deep2[active1-1].length - 1].id
                    break
                case 2 :
                    setDeep(++deep)
                    break
                case 3:
                    break;
            }
        }  else if (e.code === "KeyD" || e.code === "ArrowRight") {
            switch(deep) {
                case 1 :
                    if (active1 < max1) {
                        setActive1(++active1)
                    }
                    break
                case 2 :
                    if (active2 < max2) {
                        setActive2(++active2)
                    }
                    break
                case 3:
                    break;
            }
        } else if (e.code === "Enter") {
            switch(deep) {
                case 1 :
                    setDeep(++deep)
                    min2 = deep2[active1-1][0].id
                    max2 = deep2[active1-1][deep2[active1-1].length - 1].id
                    break
                case 2 :
                    setDeep(++deep)
                    break
                case 3:
                    setOpen(true)
                    setDeep(++deep)
                    break;
            }
        } else if (e.code === "Backspace") {
            switch(deep) {
                case 1 :
                    router.push("/")
                    break
                case 2 :
                    setDeep(--deep)
                    setActive2(active2=1)
                    break
                case 3:
                    setDeep(--deep)
                    break;
                case 4:
                    setOpen(false)
                    setDeep(--deep)
                    break;
            }
        }
    };
    document.addEventListener("keydown", listener);
    return () => {
        document.removeEventListener("keydown", listener);
    };
    }, []);

    useEffect(() => {
        let diff = active2 - 1;
        diff *= -1;
        let width = 80;
        let padding = 3;
        let margin = 3;
        let user_width = width + 2 * padding + 2 * margin;
        setTransform(diff * user_width);
        setBg(deep2[active1-1][active2 - 1]?.bg);
    }, [active2]);


    useEffect(() => {
        setBg(deep2[active1-1][active2 - 1]?.bg);
    }, [active1]);


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
                active2={active2}
                transform={transform}
                />
                <TechTitle 
                active1={active1} 
                active2={active2}
                deep={deep}
                />
                <Controller />
                <Drawer open={open} anchor="right" >
                    123123123
                    12312312312
                    3123123
                </Drawer>
            </div>
        </div>
    )
}

export default Tech;