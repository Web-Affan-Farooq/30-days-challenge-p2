"use client";
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [cardStatus, setcardStatus] = useState(false); 
  const [task, settask] = useState<string>("");
  const [pomodoroStatus, setpomodoroStatus] = useState(false);
  const [minutes, setminutes] = useState("00");
  const [seconds, setseconds] = useState("00");

  const settingTask = (event:React.ChangeEvent<HTMLInputElement>) => {
    settask(event.target.value);  //input value
  }

  const showCard_2 = () => {
    setcardStatus(!cardStatus); 
  }

  useEffect(() => {
    if(pomodoroStatus) {
      let interval = setInterval(() => {
        
      }, 1000);
    }
  })

  return (
    <div className='container'>
      {cardStatus ? <div className="card-2">
        <h1>What Is It ?</h1>
        <p>
          The Pomodoro Timer is a time management tool that follows the Pomodoro Technique, which helps improve productivity and focus. The technique breaks work into intervals, traditionally 25 minutes long, separated by short breaks. </p>
        <h2>All you've todo :</h2>
        <ol>
          <li><strong>Set the task</strong> you want to work on</li>
          <li><strong>Set the timer</strong> for 1 pomodoro (usually 25 minutes)</li>
          <li><strong>Work on the task</strong> until the timer rings.</li>
          <li><strong>Take a short break</strong> usually 5 mins</li>
          <li><strong>Repeat the process for 4 Pomodoros</strong></li>
          <li><strong>Upon completion of 4 pomodoros</strong> take a longer break</li>
        </ol>
        <button type="button" onClick={showCard_2}>Continue</button>
      </div> : <div className="card-1">
        <h1>Pomodoro timer</h1>
        <br />
        <div className="task">{task}</div>
        <br />
        <div className="timer">{minutes}:{seconds}</div>
        <input type="text" name='task' id='task' required placeholder='Set task' onChange={settingTask}/>
        <br />
        <br />
        <div className="btn-container">
          <button type="button">Start pomodoro</button>
          <button type="button" onClick={showCard_2}>What is it?</button>
        </div>
      </div>}
    </div>
  )
}

export default Home;

/*
Set a task you want to work on.
Set the timer for 25 minutes (1 Pomodoro).
Work on the task until the timer rings.
Take a short break, usually 5 minutes.
Repeat this process for four Pomodoros.
After completing four Pomodoros, take a longer break, typically 15-30 minutes.
 */