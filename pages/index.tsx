import type { NextPage } from 'next'
import { useState, useRef , useEffect } from "react"
import styles from '/styles/Home.module.css'
import Login from './components/Login'
import Controller from './components/Controller'
import Profile from './components/Profile'

const Home: NextPage = () => {
  const [user, setUser] = useState(undefined);
  return (
    <div className={styles.container}>
      <Login />
      <Controller />
      <Profile setUser={setUser}/>
    </div>
  )
}

export default Home