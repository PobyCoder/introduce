import React, { useState, useEffect } from "react";
import type { NextPage } from 'next'

const Clock: NextPage = () => {
    const date = new Date();
    let hour = date.getHours()
    let minute = date.getMinutes()
    let times = leadingZeros(date.getSeconds())
    let filterTime = hour+":"+minute+":"+times
    const [time, setTime] = useState(filterTime);
    const getTime = () => {
        const date = new Date();
        let hour = date.getHours()
        let minute = date.getMinutes()
        let times = leadingZeros(date.getSeconds())
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

function leadingZeros(n:Number) {
    let zero = '';
    let newTime = n.toString();
  
    if (newTime.length < 2) {
        for (let i = 0; i < 2 - newTime.length; i++)
            zero += '0';
    }
    return zero + n;
  }

export default Clock;
