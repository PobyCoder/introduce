import React, { useState, useEffect } from "react";
import type { NextPage } from 'next'

const Clock: NextPage = () => {
    const date = new Date();
    const [time, setTime] = useState("");
    const getTime = () => {
        const date = new Date();
        let hour = fillZero(date.getHours())
        let minute = fillZero(date.getMinutes())
        let times = fillZero(date.getSeconds())
        let filterTime = hour+":"+minute+":"+times
      setTime(filterTime)
    }
    useEffect(() => {
      setInterval(getTime, 1000)
      return () => {
          setInterval(getTime, 1000)
      }
    },[])
    return (
        <div>
            {time}
        </div>
    )
}

function fillZero(n:Number) {
    let zero = '';
    let newTime = n.toString();
  
    if (newTime.length < 2) {
        for (let i = 0; i < 2 - newTime.length; i++)
            zero += '0';
    }
    return zero + n;
  }

export default Clock;
