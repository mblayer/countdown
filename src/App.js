import './App.css';

import React, { useEffect, useState, useRef } from 'react';

const eventDate = new Date('4 May 2022, 00:00:00 GMT-0300').getTime();
const eventName = 'El siguiente dia de starwars es en:'
function CountDown() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  let interval = useRef();

  const startTimer = () => {
    
    interval = setInterval(() => {
      const now = new Date().getTime();
      const diferenceTime = eventDate - now;
      const days = Math.floor(diferenceTime / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (diferenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((diferenceTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diferenceTime % (1000 * 60)) / 1000);

      if (hours < '10') {
        hours = '0' + hours;
      }
      if (minutes < '10') {
        minutes = '0' + minutes;
      }
      if (seconds < '10') {
        seconds = '0' + seconds;
      }

      if (diferenceTime < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className='default'>
      <section className='title'>
        <span>{eventName}</span>
      </section>
      <section className='counter'>
        <section className='timer'>
          <span className='time'>{timerDays}</span>
          <span className='timerTitle'>Days</span>
        </section>
        <section className='timer'>
          <span className='time'>{timerHours}</span>
          <span className='timerTitle'>Hours</span>
        </section>
        <section className='timer'>
          <span className='time'>{timerMinutes}</span>
          <span className='timerTitle'>Minutes</span>
        </section>
        <section className='timer'>
          <span className='time'>{timerSeconds}</span>
          <span className='timerTitle'>Seconds</span>
        </section>
      </section>
    </div>
  );
}

export default CountDown; 
