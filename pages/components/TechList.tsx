import React, { useState, useEffect } from "react";
import type { NextPage } from 'next'
import styles from "/styles/Tech.module.css";

type TechListeProps = {
    active1: number;
    deep: number;
    setBg: any;
    active2: number;
    setActive2: any;
};

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

const TechList: NextPage<TechListeProps> = ({active1, deep, setBg, setActive2, active2}) => {
    let min2 = sections[active1-1][0].id
    let max2 = sections[active1-1][sections[active1-1].length - 1].id
    const [transform, setTransform] = useState(0)
    setBg(sections[active1-1][0]?.bg);
    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.code === "KeyA" || e.code === "ArrowLeft") {
                switch(deep) {
                    case 2 :
                        if (active2 > min2) {
                            setActive2(--active2)
                        }
                        break
                }
            }  else if (e.code === "KeyD" || e.code === "ArrowRight") {
                switch(deep) {
                    case 2 :
                        if (active2 < max2) {
                            setActive2(++active2)
                        }
                        break
                }
            } else if (e.code === "Enter") {
            } else if (e.code === "Backspace") {
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
        setBg(sections[active1-1][active2 - 1]?.bg);
    }, [active2]);
   
    return (
        <div
        className={styles.sections}
        style={deep === 2 ? {transform:`translateX(${transform}px)`} : {transform :"translateX(0px)"} }
        >
            {sections[active1-1].map((sec: { id: string | number; icon: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <div
                key={`game_`+sec.id}
                className={`${styles.sect} ${
                    active2 === sec.id && deep === 2 ? styles.activeSect : ""
                }`}
                >
                    <div className={styles.iconWrap}>
                        <img src={sec.icon} />
                    </div>
                {active2 === sec.id && deep === 2 ? <p>{sec.name}</p> : ""}
                </div>
            ))}
        </div>
    )
}

export default TechList;
